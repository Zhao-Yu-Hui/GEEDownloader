function updateObject(self, other) {
    var other_len = other.length
    for (var i = 0; i < other_len; i++) {
        for (var key in other[i]) {
            self[key] = other[i][key]
        }
    }
    return self
}
exports.updateObject = updateObject

/*
// Test
var a = {var1: 'a', var2: 'a'}
print(a)
var b = {var2: 'b', var3: 'b'}
print(b)
var c = updateObject(a, [b,])
print(a)
print(c)
*/
