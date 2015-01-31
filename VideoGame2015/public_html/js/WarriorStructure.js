function WarriorStructure() {
    this.maximum = 100;
    this.countWarriorType = [0, 0, 0, 0];
    
    // other logistics of the battle
    this.war = undefined;
    this.arrival = undefined;
}

WarriorStructure.prototype.total = function() {
    return this.countWarriorType.reduce(function(a, b) { return a + b });;
};

WarriorStructure.prototype.increase = function(warriorType) {
    if (this.total() < this.maximum  &&  this.countWarriorType[warriorType]<this.maximum) {
	this.countWarriorType[warriorType]++;
    }
};

WarriorStructure.prototype.decrease = function(warriorType) {
    if (this.total() > 0  &&  this.countWarriorType[warriorType]>0) {
        this.countWarriorType[warriorType]--;
    }
};

WarriorStructure.prototype.get = function(warriorType) {
	return this.countWarriorType[warriorType];
};

WarriorStructure.prototype.getAll = function() {
	return this.countWarriorType;
};
