/**
 * A single row in a hospital's operating hours schedule.
 *
 * - `days`: array of day-keys (e.g. ["mon","tue","fri"]) or
 *           special keys like "nationalHolidays", "weekdays".
 * - `times`: time range string(s) like "9:00~12:00" (numbers are locale-neutral).
 * - `closed`: when true this row represents closed days (no `times` needed).
 * - `note`: optional translation key for a free-text note row (e.g. "variesByDept").
 */
export interface HospitalHoursRow {
    days: string[];
    times?: string;
    closed?: boolean;
    note?: string;
}

export interface Hospital {
    key: string;
    area: string;
    specialties: string[];
    phone: string;
    website: string;
    mapUrl: string;
    hours?: HospitalHoursRow[];
}