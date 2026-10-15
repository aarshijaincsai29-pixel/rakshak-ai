package backend;

import java.util.Scanner;

class Product {
    int id;
    String name;
    double price;

    Product(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    void display() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Price: Rs. " + price);
        System.out.println("--------------------");
    }
}

public class ProductSearch {
    public static void main(String[] args) {

        Product[] products = {
            new Product(1, "Laptop", 55000),
            new Product(2, "Smartphone", 15000),
            new Product(3, "Headphones", 2000),
            new Product(4, "Smart Watch", 3000),
            new Product(5, "Keyboard", 1200)
        };

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter product name to search: ");
        String searchName = sc.nextLine().trim();

        boolean found = false;

        for (int i = 0; i < products.length; i++) {
            if (products[i].name.equalsIgnoreCase(searchName)) {
                products[i].display();
                found = true;
            }
        }

        if (!found) {
            System.out.println("Product not found!");
        }

        sc.close();
    }
}

