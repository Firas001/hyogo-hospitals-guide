import { useTranslations } from 'next-intl';
import { Hospital, HospitalHoursRow } from '../types';

// --- SVG Icons ---
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

const MapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
        <line x1="9" y1="3" x2="9" y2="18" />
        <line x1="15" y1="6" x2="15" y2="21" />
    </svg>
);

/**
 * Ordered sequence of the 7 week day keys used in HospitalHoursRow.
 * Special tokens like "weekdays" / "nationalHolidays" are handled separately.
 */
const WEEK_ORDER = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const;

/**
 * Formats an array of day keys into a compact human-readable string.
 *
 * Rules:
 * - Special tokens (weekdays, nationalHolidays) are always translated individually.
 * - Consecutive sequences of 3+ regular days collapse into "First ~ Last".
 * - Non-consecutive or 1-2 day groups are listed with " / ".
 *
 * Example inputs → outputs (in English):
 *   ["mon","tue","wed","thu","fri","sat"] → "Mon ~ Sat"
 *   ["mon","tue","wed","fri"]             → "Mon / Tue / Wed / Fri"
 *   ["mon","wed","fri"]                   → "Mon / Wed / Fri"
 *   ["mon","tue","fri","sat"]             → "Mon ~ Tue / Fri ~ Sat"
 *   ["tue","sun","nationalHolidays"]      → "Tue / Sun / National Holidays"
 */
function formatDays(
    days: string[],
    tCommon: ReturnType<typeof useTranslations>
): string {
    const t = (k: string) => tCommon(k as Parameters<typeof tCommon>[0]);

    // Separate regular week-days from special tokens
    const specialTokens = new Set(['weekdays', 'nationalHolidays']);
    const weekDays = days.filter(d => !specialTokens.has(d));
    const specials = days.filter(d => specialTokens.has(d));

    // Sort week-days by their canonical order
    const sorted = [...weekDays].sort(
        (a, b) => WEEK_ORDER.indexOf(a as typeof WEEK_ORDER[number]) - WEEK_ORDER.indexOf(b as typeof WEEK_ORDER[number])
    );

    // Group consecutive runs
    const parts: string[] = [];
    let i = 0;
    while (i < sorted.length) {
        const runStart = i;
        while (
            i + 1 < sorted.length &&
            WEEK_ORDER.indexOf(sorted[i + 1] as typeof WEEK_ORDER[number]) ===
            WEEK_ORDER.indexOf(sorted[i] as typeof WEEK_ORDER[number]) + 1
        ) {
            i++;
        }
        const runEnd = i;
        const runLength = runEnd - runStart + 1;

        if (runLength >= 3) {
            // Collapse: "Mon ~ Fri"
            parts.push(`${t(sorted[runStart])} ~ ${t(sorted[runEnd])}`);
        } else {
            // List individually
            for (let j = runStart; j <= runEnd; j++) {
                parts.push(t(sorted[j]));
            }
        }
        i++;
    }

    // Append special tokens at end
    for (const s of specials) parts.push(t(s));

    return parts.join(' / ');
}

/**
 * Renders a single structured hours row using translated day names.
 * - `note` rows: full-width italic note (e.g. "varies by department").
 * - `closed` rows: red label + translated day list.
 * - Regular rows: translated day list + LTR time range.
 */
function HoursRow({
    row,
    index,
    tCommon,
}: {
    row: HospitalHoursRow;
    index: number;
    tCommon: ReturnType<typeof useTranslations>;
}) {
    const bg = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';

    // Pure note row (e.g. "hours vary by department")
    if (row.note && row.days.length === 0) {
        return (
            <div className={`px-3 py-2 text-xs italic text-gray-500 ${bg}`}>
                {tCommon(row.note as Parameters<typeof tCommon>[0])}
            </div>
        );
    }

    const daysList = formatDays(row.days, tCommon);

    // Closed row
    if (row.closed) {
        return (
            <div className={`flex items-start justify-between gap-2 px-3 py-2 text-xs bg-red-50`}>
                <span className="font-semibold whitespace-nowrap text-red-600">
                    {tCommon('closed')}
                </span>
                <span className="text-end text-red-500">
                    {daysList}
                </span>
            </div>
        );
    }

    // Regular hours row (optionally prefixed with a note label)
    const label = row.note
        ? `${tCommon(row.note as Parameters<typeof tCommon>[0])}: ${daysList}`
        : daysList;

    return (
        <div className={`flex items-start justify-between gap-2 px-3 py-2 text-xs ${bg}`}>
            <span className="font-semibold whitespace-nowrap text-gray-700">
                {label}
            </span>
            <span className="text-end text-gray-500" dir="ltr">
                {row.times}
            </span>
        </div>
    );
}

export default function HospitalCard({ hospital }: { hospital: Hospital }) {
    const tAreas = useTranslations('areas');
    const tSpecialties = useTranslations('specialties');
    const tHospitals = useTranslations('hospitals');
    const tCommon = useTranslations('common');

    const hasHours = hospital.hours && hospital.hours.length > 0;

    return (
        <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden">

            {/* ── Header ── */}
            <div className="border-b-4 border-blue-500 bg-white px-5 pt-5 pb-4 flex gap-3 items-start justify-between">

                <h3 className="text-[17px] font-bold text-gray-800 leading-snug flex-1">
                    {tHospitals(`${hospital.key}.name`)}
                </h3>

                <span className="bg-blue-50 text-blue-600 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 whitespace-nowrap shrink-0 mt-0.5">
                    {tAreas(hospital.area)}
                </span>

            </div>

            {/* ── Specialties ── */}
            <div className="mt-4 px-5">
                <div className="flex flex-wrap gap-1.5">
                    {hospital.specialties.map((specialty, index) => (
                        <span
                            key={index}
                            className="bg-blue-50 text-blue-700 text-[11px] font-medium px-2.5 py-1 rounded-full border border-blue-100 shadow-sm"
                        >
                            {tSpecialties(specialty)}
                        </span>
                    ))}
                </div>
            </div>

            {/* ── Details ── */}
            <div className="px-5 pt-4 pb-2 flex flex-col gap-3 grow">

                {/* Phone */}
                <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <span className="text-blue-500 mt-0.5"><PhoneIcon /></span>
                    <span dir="ltr" className="font-mono tracking-wide text-gray-800">{hospital.phone}</span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-blue-500 mt-0.5"><MapPinIcon /></span>
                    <span className="leading-relaxed">{tHospitals(`${hospital.key}.address`)}</span>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-2.5 text-sm">
                    <span className="text-blue-500 mt-0.5 shrink-0"><ClockIcon /></span>
                    <div className="flex-1">
                        {hasHours ? (
                            <div className="rounded-xl border border-gray-100 overflow-hidden bg-gray-50">
                                {hospital.hours!.map((row, i) => (
                                    <HoursRow key={i} row={row} index={i} tCommon={tCommon} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-xs text-gray-400 italic leading-relaxed bg-gray-50 rounded-xl px-3 py-2 border border-gray-100">
                                —
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* ── Footer Actions ── */}
            <div className="px-5 py-4 mt-2 border-t border-gray-100 flex gap-2.5">
                <a
                    href={hospital.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-medium py-2.5 px-4 rounded-xl transition-colors shadow-sm shadow-blue-200"
                >
                    <GlobeIcon />
                    {tCommon('website')}
                </a>
                <a
                    href={hospital.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 text-sm font-medium py-2.5 px-4 rounded-xl transition-colors"
                >
                    <MapIcon />
                    {tCommon('map')}
                </a>
            </div>
        </div>
    );
}