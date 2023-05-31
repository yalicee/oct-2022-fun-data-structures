function createQueue(maxSize = 5) {
	const queue = Object.create(queuePrototype);
	queue.front = 0;
	queue.back = 0;
	queue.maxSize = maxSize;
	queue.storage = {};
	return queue;
}

const queuePrototype = {
	enQueue,
	deQueue,
	getQuantity,
	isEmpty,
	isFull,
	peek,
};

function enQueue(item) {
	if (this.back === 0) {
		this.back = 1;
		this.front = 1;
		this.storage[this.back] = item;
	} else {
		const quantity = this.getQuantity();
		if (quantity < this.maxSize) {
			this.back++;
			this.storage[this.back] = item;
		}
	}
}

function deQueue() {
	const firstItem = this.storage[this.front];
	delete this.storage[this.front];
	this.front++;
	if (this.front > this.back) {
		this.front = 0;
		this.back = 0;
	}
	return firstItem;
}

function getQuantity() {
	if (!this.front || !this.back) return 0;
	return this.back - this.front + 1;
}

function isEmpty() {
	return this.front === 0 && this.back === 0;
}

function isFull() {
	return this.getQuantity() === this.maxSize;
}

function peek() {
	if (!this.isEmpty()) {
		return this.storage[this.front];
	}
}

module.exports = createQueue;
