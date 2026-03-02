// src/utils/SortingNames.ts
export function sortMembersByPosition(members: any[]) {
  const hierarchy: Record<string, number> = {
    "CEO": 1,
    "CSO": 2,
    "CTO": 3,
    "C0O": 4
  };

  return [...members].sort((a, b) => {
    const rankA = hierarchy[a.position] || 99;
    const rankB = hierarchy[b.position] || 99;

    if (rankA !== rankB) {
      return rankA - rankB;
    }
    return a.name.localeCompare(b.name);
  });
}