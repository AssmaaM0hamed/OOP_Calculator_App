class Calculation {
    static add(num1, num2) {
        return num1 + num2;
    }

    static subtract(num1, num2) {
        return num1 - num2;
    }

    static multiply(num1, num2) {
        return num1 * num2;
    }

    static divide(num1, num2) {
        return num1 / num2;
    }

    static calculate(num1, num2, operator) {
        let result;

        switch (operator) {
            case "+":
                result = this.add(num1, num2);
                break;
            case "-":
                result = this.subtract(num1, num2);
                break;
            case "*":
                result = this.multiply(num1, num2);
                break;
            case "/":
                result = this.divide(num1, num2);
                break;
        }
        return result;
    }
}

export default Calculation;
