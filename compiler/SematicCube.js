export const sematicCube = {
    '+': { // addition
        'ent': {
            'ent': 'ent',
            'flot': 'flot',
        },
        'flot': {
            'ent': 'flot',
            'flot': 'flot',
        },
    },
    '-': { // subtraction
        'ent': {
            'ent': 'ent',
            'flot': 'flot',
        },
        'flot': {
            'ent': 'flot',
            'flot': 'flot',
        },
    },
    '*': { // multiplication
        'ent': {
            'ent': 'ent',
            'flot': 'flot',
        },
        'flot': {
            'ent': 'flot',
            'flot': 'flot',
        },
    },
    '/': { // division
        'ent': {
            'ent': 'flot',
            'flot': 'flot',
        },
        'flot': {
            'ent': 'flot',
            'flot': 'flot',
        },
    },
    '>': { // more than
        'ent': {
            'ent': 'ent',
            'flot': 'ent',
        },
        'flot': {
            'ent': 'ent',
            'flot': 'ent',
        },
    },
    '<': { // less than
        'ent': {
            'ent': 'ent',
            'flot': 'ent',
        },
        'flot': {
            'ent': 'ent',
            'flot': 'ent',
        },
    },
    '==': { // equals
        'ent': {
            'ent': 'ent',
            'flot': 'ent',
        },
        'flot': {
            'ent': 'ent',
            'flot': 'ent',
        },
    },
    '!=': { // doesn't equal
        'ent': {
            'ent': 'ent',
            'flot': 'ent',
        },
        'flot': {
            'ent': 'ent',
            'flot': 'ent',
        },
    },
    '=': { // assignation
        'ent': {
            'ent': 'ent',
            'flot': 'ent',
        },
        'flot': {
            'ent': 'flot',
            'flot': 'flot',
        },
    },
}