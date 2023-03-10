function Storage(_name) {
    this.m_name = _name;
    this.m_data = [];
}

function Storage(_name, _data) {
    this.m_name = _name;
    if (!_data) {
        this.m_data = [];
    } else {
        this.m_data = _data;
    }
}

Storage.prototype.getAll = function() {
    return this.m_data;
}

Storage.prototype.add = function(value) {
    this.m_data.push(value);
}

Storage.prototype.saveToCache = function() {
    putValueToCache(this.m_name, JSON.stringify(this.m_data));
}

Storage.prototype.syncWithCache = function() {
    let cache = getValueFromCache(this.m_name);
    if (cache) {
        this.m_data = JSON.parse(cache);
    } else {
        this.m_data = [];
    }
}

Storage.prototype.clearAll = function() {
    m_data = [];
}
