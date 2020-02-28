/**
给出一个无重叠的 ，按照区间起始端点排序的区间列表。
在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

示例 1:
输入: intervals = [[1,3],[6,9]], newInterval = [2,5]
输出: [[1,5],[6,9]]
示例 2:
输入: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出: [[1,2],[3,10],[12,16]]
解释: 这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
**/

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  let res = [],
    l = newInterval.start,
    r = newInterval.end,
    temp;
  let i = 0;
  if (intervals.length === 0) return [newInterval];
  if (newInterval.start > intervals[intervals.length - 1].end) {
    intervals.push(newInterval);
    return intervals;
  }
  for (; i < intervals.length; i++) {
    const item = intervals[i];
    if (item.end < l) {
      res.push(item);
      continue;
    }
    // 1
    if (temp === undefined && item.start > r) {
      res.push(newInterval);
      res = res.concat(intervals.slice(i, intervals.length));
      break;
    }
    // 2
    if (temp === undefined && item.end >= r) {
      res.push(new Interval(Math.min(l, item.start), item.end));
      res = res.concat(intervals.slice(i + 1, intervals.length));
      break;
    }
    // 3
    if (temp === undefined) {
      temp = new Interval(Math.min(l, item.start), r);
    } else {
      if (item.start > r) {
        res.push(temp);
        temp = undefined;
        res = res.concat(intervals.slice(i, intervals.length));
        break;
      } else if (item.end >= r) {
        res.push(new Interval(temp.start, item.end));
        temp = undefined;
        res = res.concat(intervals.slice(i + 1, intervals.length));
        break;
      }
    }
  }
  if (temp !== undefined) res.push(temp);
  return res;
};

console.log(
  insert(
    [
      { start: 1, end: 3 },
      { start: 6, end: 9 }
    ],
    {
      start: 2,
      end: 5
    }
  )
);

console.log(
    insert(
      [
        { start: 1, end: 2 },
        { start: 3, end: 5 },
        { start: 6, end: 7 },
        { start: 8, end: 10 },
        { start: 12, end: 16 },
      ],
      {
        start: 4,
        end: 8
      }
    )
  );
  