var NestedIterator = function(nestedList) {
    vals = [];
    const dfs = (nestedList) => {
        for (const nest of nestedList) {
            if (nest.isInteger()) {
                vals.push(nest.getInteger());
            } else {
                dfs(nest.getList());
            }
        }
    }
    dfs(nestedList);
};

NestedIterator.prototype.hasNext = function() {
    return vals.length > 0;
};

NestedIterator.prototype.next = function() {
    const val = vals[0];
    vals = vals.slice(1);
    return val;
};