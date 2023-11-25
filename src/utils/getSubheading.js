export const getSubheading = (tasksLength) => {
    
    if (!tasksLength) return 'Brak zadań'
    
    if (tasksLength == 1) {
        return `${ tasksLength } zadanie`
    }

    if (tasksLength < 5) {
        return `${ tasksLength } zadania`
    }

    return `${ tasksLength } zadań`    
}