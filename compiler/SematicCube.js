export const sematicCube = {
    '+': { // addition
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