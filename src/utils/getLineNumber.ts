export default function getLineNumber(summaryText: string): number {
  const lines = summaryText.split("\n");
  const count = lines.length;
  return count;
}
