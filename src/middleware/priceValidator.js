function priceValidator(minPrice, maxPrice) {
    if (minPrice === undefined && maxPrice === undefined) {
        return "Both minimum and maximum price query parameters are required"
    }

    if (minPrice === undefined) {
        return "Minimum price query parameter is required"
    }

    if (maxPrice === undefined) {
        return "Maximum price query parameter is required"
    }

    const regPattern = /^\d+(\.\d+)?$/
    if (!regPattern.test(minPrice) && !regPattern.test(maxPrice)) {
        return "Both minimum price and maximum price query parameters must be a valid numerical values"
    }

    if (!regPattern.test(minPrice)) {
        return "Minimum price query parameter must be a valid numerical value"
    }

    if (!regPattern.test(maxPrice)) {
        return "Maximum price query parameter must be a valid numerical value"
    }

    if (parseFloat(minPrice) >= parseFloat(maxPrice)) {
        return "Invalid price range provided. The minimum price must be less than maximum price"
    }

    return null
}

module.exports = priceValidator;