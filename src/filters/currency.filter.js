export default function currencyFilter(value, currency = 'PLN') {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency
    }).format(value)
}