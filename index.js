document.getElementById('currencyForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    let amount = document.getElementById('amount').value;
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;

    // Sample conversion rates
    const conversionRates = {
        'USD': { 'EUR': 0.85, 'EGP': 48.4, 'USD': 1 },
        'EUR': { 'USD': 1.18, 'EGP': 53.6, 'EUR': 1 },
        'EGP': { 'USD': 0.0207, 'EUR': 0.0186, 'EGP': 1 }
    };

    // Convert amount
    let convertedAmount = amount * conversionRates[fromCurrency][toCurrency];

    // Display result
    document.getElementById('result').textContent = 
        `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});
