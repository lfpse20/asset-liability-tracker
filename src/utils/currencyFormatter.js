var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const formatCurrency = (num) => {
    return formatter.format(num)
} 
