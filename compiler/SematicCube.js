export const sematicCube = {
    '+': { // addition
        'code': 1,
        'entero': {
            'entero': 'entero',
            'flotante': 'flotante',
        },
        'flotante': {
            'entero': 'flotante',
            'flotante': 'flotante',
        },
    },
    '-': { // subtraction
        'code': 2,
        'entero': {
            'entero': 'entero',
            'flotante': 'flotante',
        },
        'flotante': {
            'entero': 'flotante',
            'flotante': 'flotante',
        },
    },
    '*': { // multiplication
        'code': 3,
        'entero': {
            'entero': 'entero',
            'flotante': 'flotante',
        },
        'flotante': {
            'entero': 'flotante',
            'flotante': 'flotante',
        },
    },
    '/': { // division
        'code': 4,
        'entero': {
            'entero': 'flotante',
            'flotante': 'flotante',
        },
        'flotante': {
            'entero': 'flotante',
            'flotante': 'flotante',
        },
    },
    '>': { // more than
        'code': 5,
        'entero': {
            'entero': 'entero',
            'flotante': 'entero',
        },
        'flotante': {
            'entero': 'entero',
            'flotante': 'entero',
        },
    },
    '<': { // less than
        'code': 6,
        'entero': {
            'entero': 'entero',
            'flotante': 'entero',
        },
        'flotante': {
            'entero': 'entero',
            'flotante': 'entero',
        },
    },
    '==': { // equals
        'code': 7,
        'entero': {
            'entero': 'entero',
            'flotante': 'entero',
        },
        'flotante': {
            'entero': 'entero',
            'flotante': 'entero',
        },
    },
    '!=': { // doesn't equal
        'code': 8,
        'entero': {
            'entero': 'entero',
            'flotante': 'entero',
        },
        'flotante': {
            'entero': 'entero',
            'flotante': 'entero',
        },
    },
    '=': { // assignation
        'code': 9,
        'entero': {
            'entero': 'entero',
            'flotante': 'entero',
        },
        'flotante': {
            'entero': 'flotante',
            'flotante': 'flotante',
        },
    },
}