function WarriorStructure() {
    this.maximum = 100;
    this.countWarriorType = [0, 0, 0, 0];
}

WarriorStructure.prototype.total = function() {
    return this.countWarriorType.reduce(function(a, b) { return a + b });;
};

WarriorStructure.prototype.increase = function(warriorType) {
    if (this.total() < this.maximum  &&  this.countWarriorType[warriorType-1]<this.maximum) {
	this.countWarriorType[warriorType-1]++;
    }
};

WarriorStructure.prototype.decrease = function(warriorType) {
    if (this.total() > 0  &&  this.countWarriorType[warriorType-1]>0) {
        this.countWarriorType[warriorType-1]--;
    }
};

WarriorStructure.prototype.get = function(warriorType) {
	return this.countWarriorType[warriorType-1];
};

WarriorStructure.prototype.getAll = function() {
	return this.countWarriorType;
};
