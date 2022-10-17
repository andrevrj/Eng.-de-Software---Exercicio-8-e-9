const create = {
    name: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    car: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    name: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    car: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    car: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    car: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};