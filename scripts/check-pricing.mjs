// Kontrola ceníku: duplicity v rámci jedné kategorie (stejný název + délka) a výpis položek.
// Stejná služba v různých kategoriích (např. lakování u manikúry i pedikúry) je v pořádku.
// Node ≥ 22.18 umí importovat .ts přímo (type stripping)
const mod = await import(new URL('../src/data/pricing.ts', import.meta.url));
const seen = new Map(); let n = 0, dup = 0;
for (const c of mod.pricing) for (const g of c.groups) for (const i of g.items) {
  n++;
  const key = `${c.id}|${i.name.toLowerCase()}|${i.duration ?? ''}`;
  if (seen.has(key)) { dup++; console.log(`DUPLICITA v kategorii ${c.id}: "${i.name}"`); }
  seen.set(key, c.id);
  if (process.argv.includes('--list')) console.log(`${c.id.padEnd(12)} ${String(i.price).padStart(14)}  ${i.duration ?? ''}\t${i.name}`);
}
console.log(`Položek: ${n}, duplicit: ${dup}`);
process.exit(dup ? 1 : 0);
