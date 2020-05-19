//schedules
//teachers have trouble findinng free time for meetings
//takes a schedule of time slots, calculate the free time in a specific range
//[1,1,0,0,1]
//[10:30-11,12-1:30]
//can be double-booked
sched = [{
  start: 1000
    end: 1030
    topic: "meeting with principal"
},
{
  start: 1015
    end: 1045
    topic: "meeting with principal"
},
{
  start: 1100
    end: 1130
    topic: "meeting with principal"
},]
//sort sched
sched.sort((a, b) => a[start] - b[start]) true a comes before b,
  free = []
//before sched[0][start]
free.push({
  start: 800,
  end: sched[0][start]
})
sBusy = sched[0][start]
eBusy = sched[0][end]
for (let i = 1; i < sched.length; i++) {
  if (sched[i][start] > eBusy) { //1015 > 1030 -> false // 1100 > 1045 --> true
    //free from sched[0][end] to sched[1][start]
    free.push({
      start: eBusy, //sched[i-1][end] // {start: 1045, end: 1100}
      end: sched[i][start]
    })
    sBusy = sched[i][start] //1100
    eBusy = sched[i][end]   //1130
  } else {
    eBusy = sched[i][end] > eBusy ? sched[i][end] : eBusy
    //1045 > 1030 --> true --> eBusy = 1045
  }
}
free.push({
  start: eBusy,
  end: 1700
})

return free
//10:30 - 11
//10:45 - 11:15
