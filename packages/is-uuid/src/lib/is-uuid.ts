export function isUuid(value: any): value is string {
  return typeof value === "string" && value.length === 36;
}