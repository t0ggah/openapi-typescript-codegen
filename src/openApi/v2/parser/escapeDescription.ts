export function escapeDescription(value: string): string {
    return value.replace(/([^\\])`/g, '$1\\`');
}
