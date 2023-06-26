function getStudentTopNotes(a){
    let topNotes = a.map(function (ele) {
        let arrNotes = ele.notes
        if (arrNotes) {
        return Math.max(...arrNotes)
        } else {
            return 0
        }
    })
    return topNotes
}

console.log(getStudentTopNotes([
  {
    id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5]
  },
  {
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5]
  },
  {
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
  }
]) );