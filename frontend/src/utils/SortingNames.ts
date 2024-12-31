export function sortMembersByPosition(members: any[]) {
    return members.sort((a, b) => {
      if (a.position === "CEO") return -1;
      if (b.position === "CEO") return 1;
  
      if (a.position === "COO") return -1;
      if (b.position === "COO") return 1;
  
      return a.position.localeCompare(b.position);
    });
  }