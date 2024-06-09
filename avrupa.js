// Marka seçildiğinde model seçme alanını güncelleyen fonksiyon
function populateModels() {
    const brand = document.getElementById("brandSelect").value;
    const modelSelect = document.getElementById("modelSelect");
    modelSelect.innerHTML = "<option value=''>Model Seçiniz</option>";

    // Sabit bir liste olarak marka ve model bilgileri ile SAR değerleri
    const phoneModels = {
        "Samsung": [
            { model: "Galaxy S24", sar: 1.23 },
            { model: "Galaxy S24+", sar: 1.16 },
            { model: "Galaxy S24 Ultra", sar: 1.26 },
            { model: "Galaxy S23", sar: 0.96 },
            { model: "Galaxy S23+", sar: 0.96 },
            { model: "Galaxy S23 Ultra", sar: 0.96 },
            { model: "Galaxy Z Fold 5", sar: 1.24 },
            { model: "Galaxy Z Flip 5", sar: 0.71 },
            { model: "Galaxy A74", sar: 0.71 },
            { model: "Galaxy A54", sar: 0.69 },
            { model: "Galaxy A34", sar: 0.54 },
            { model: "Galaxy M54", sar: 0.49 },
            { model: "Galaxy M34", sar: 0.89 },
            { model: "Galaxy S22", sar: 1.21 },
            { model: "Galaxy S22+", sar: 0.71 },
            { model: "Galaxy S22 Ultra", sar: 1.04 },
            { model: "Galaxy Z Fold 4", sar: 1.30 },
            { model: "Galaxy Z Flip 4", sar: 1.15 },
            { model: "Galaxy A73", sar: 1.28 },
            { model: "Galaxy A53", sar: 0.88 },
            { model: "Galaxy A33", sar: 0.57 },
            { model: "Galaxy M53", sar: 0.60 },
            { model: "Galaxy M33", sar: 1.042 },
            { model: "Galaxy S21", sar: 0.45 },
            { model: "Galaxy S21+", sar: 0.54 },
            { model: "Galaxy S21 Ultra", sar: 0.71 },
            { model: "Galaxy Z Fold 3", sar: 1.03 },
            { model: "Galaxy Z Flip 3", sar: 0.86 },
            { model: "Galaxy A72", sar: 0.23 },
            { model: "Galaxy A52", sar: 0.34 },
            { model: "Galaxy A32", sar: 0.33 },
            { model: "Galaxy M52", sar: 0.78 },
            { model: "Galaxy M32", sar: 0.56 },
            { model: "Galaxy S20", sar: 0.27 },
            { model: "Galaxy S20+", sar: 0.37 },
            { model: "Galaxy S20 Ultra", sar: 0.31 },
            { model: "Galaxy Z Fold 2", sar: 0.29 },
            { model: "Galaxy Z Flip", sar: 0.36 },
            { model: "Galaxy A71", sar: 0.51 },
            { model: "Galaxy A51", sar: 0.36 },
            { model: "Galaxy A31", sar: 0.48 },
            { model: "Galaxy M51", sar: 0.60 },
            { model: "Galaxy M31", sar: 0.48 }
        ],
        "Apple": [
            { model: "iPhone 15", sar: 0.98 },
            { model: "iPhone 15 Pro", sar: 0.98 },
            { model: "iPhone 15 Plus", sar: 0.98 },
            { model: "iPhone 15 Pro Max", sar: 0.98 },
            { model: "iPhone 14", sar: 0.98 },
            { model: "iPhone 14 Pro", sar: 0.98 },
            { model: "iPhone 14 Plus", sar: 0.99 },
            { model: "iPhone 14 Pro Max", sar: 0.99 },
            { model: "iPhone 13 Mini", sar: 0.97 },
            { model: "iPhone 13", sar: 0.98 },
            { model: "iPhone 13 Pro", sar: 0.98 },
            { model: "iPhone 13 Pro Max", sar: 0.99 },
            { model: "iPhone SE 2022", sar: 1.20 },
            { model: "iPhone 12 Mini", sar: 0.98 },
            { model: "iPhone 12", sar: 0.98 },
            { model: "iPhone 12 Pro", sar: 0.98 },
            { model: "iPhone 12 Pro Max", sar: 0.98 },
            { model: "iPhone SE 2020", sar: 0.97 },
            { model: "iPhone 11", sar: 0.95 },
            { model: "iPhone 11 Pro", sar: 0.95 },
            { model: "iPhone 11 Pro Max", sar: 0.95 },
            { model: "iPhone XR", sar: 0.99 },
            { model: "iPhone XS", sar: 0.99 },
            { model: "iPhone XS Max", sar: 0.99 }
        ],
        "Xiaomi": [
            { model: "14", sar: 0.99 },
            { model: "14 Pro", sar: 0.99 },
            { model: "14 Ultra", sar: 0.99 },
            { model: "13", sar: 0.99 },
            { model: "13 Pro", sar: 0.99 },
            { model: "13 Ultra", sar: 0.99 },
            { model: "13 Lite", sar: 0.99 },
            { model: "12", sar: 0.60 },
            { model: "12 Pro", sar: 0.59 },
            { model: "12 Ultra", sar: 0 },
            { model: "12 Lite", sar: 0.99 },
            { model: "12T", sar: 0.99 },
            { model: "12T Pro", sar: 0.99 },
            { model: "12S", sar: 0 },
            { model: "12S Pro", sar: 0 },
            { model: "12S Ultra", sar: 0 },
            { model: "Mi 11", sar: 0.99 },
            { model: "Mi 11 Lite", sar: 0.60 },
            { model: "Mi 11 Pro", sar: 0 },
            { model: "Mi 11 Ultra", sar: 0.55 },
            { model: "Mi 11T", sar: 0.55 },
            { model: "Mi 11T Pro", sar: 0.57 },
            { model: "Mi 10", sar: 0.69 },
            { model: "Mi 10 Lite", sar: 0.79 },
            { model: "Mi 10 Pro", sar: 0.69 },
            { model: "Mi 10 Ultra", sar: 0 },
            { model: "Mi 10T", sar: 0.57 },
            { model: "Mi 10T Pro", sar: 0.57 },
            { model: "Mi 9", sar: 1.39 },
            { model: "Mi 9 Lite", sar: 1.42 },
            { model: "Mi 9 Pro", sar: 0 },
            { model: "Mi 9 Ultra", sar: 0 },
            { model: "Mi 9T", sar: 1.34 },
            { model: "Mi 9T Pro", sar: 1.03 },
            { model: "Mi 8", sar: 1.01 },
            { model: "Mi 8 Lite", sar: 0.74 },
            { model: "Mi 8 Pro", sar: 0 },
            { model: "Mi 8 Ultra", sar: 0 },
        ],
        "Google": [
            { model: "Pixel 8a", sar: 0 },
            { model: "Pixel 8", sar: 0.98 },
            { model: "Pixel 8 Pro", sar: 0.84 },
            { model: "Pixel Fold", sar: 0.99 },
            { model: "Pixel 7a", sar: 0.99 },
            { model: "Pixel 7", sar: 0.99 },
            { model: "Pixel 7 Pro", sar: 0.98 },
            { model: "Pixel 6a", sar: 1.31 },
            { model: "Pixel 6", sar: 1.38 },
            { model: "Pixel 6 Pro", sar: 0.99 },
            { model: "Pixel 5a", sar: 0.96 },
            { model: "Pixel 5", sar: 0.96 },
            { model: "Pixel 4a", sar: 1.37 },
            { model: "Pixel 4", sar: 1.19 },
            { model: "Pixel 4 XL", sar: 1.17 },
            { model: "Pixel 3a", sar: 0.69 },
            { model: "Pixel 3", sar: 1.33 },
            { model: "Pixel 3 XL", sar: 1.39 }
        
        ],
        "Oneplus": [
            { model: "12", sar: 0.99 },
            { model: "11", sar: 0.99 },
            { model: "10", sar: 0.99 },
            { model: "10 Pro", sar: 0.87 },
            { model: "10T", sar: 0.96 },
            { model: "9", sar: 0.99 },
            { model: "9 Pro", sar: 0.99 },
            { model: "8", sar: 0.86 },
            { model: "8 Pro", sar: 0.95 },
            { model: "8T", sar: 0.94 },
            { model: "7", sar: 1.16 },
            { model: "7 Pro", sar: 1.19 },
            { model: "7T", sar: 1.04 },
            { model: "7T Pro", sar: 0 },
            { model: "6", sar: 1.33 },
            { model: "6T", sar: 1.55 }
        ]
    // Diğer marka ve modelleri buraya ekleyebilirsiniz
    };

    // Seçilen markaya göre modelleri doldur
    phoneModels[brand].forEach(model => {
        const option = document.createElement("option");
        option.value = model.model;
        option.text = model.model;
        modelSelect.appendChild(option);
    });
}

// Arama çubuğundaki değer değiştiğinde çalışacak fonksiyon
function handleSearchInput() {
    const query = document.getElementById("searchInput").value;
    const results = searchBrandAndModel(query);

    // Sonuçları model seçim alanına ekle
    const modelSelect = document.getElementById("modelSelect");
    modelSelect.innerHTML = "<option value=''>Model Seçiniz</option>";
    results.forEach(result => {
        const option = document.createElement("option");
        option.value = result.model;
        option.text = result.model;
        modelSelect.appendChild(option);
    });
}

// Arama butonuna tıklandığında SAR değerini getiren fonksiyon
function getSARValue1() { 
    const query = document.getElementById("searchInput").value; 
    const query2 = document.getElementById("searchInput2").value; // modeli aldık
    // Seçilen marka ve modelin SAR değerini al
    const sarValue = getSelectedSARValue(query,query2);

    // SAR değerini ekrana yaz
    document.getElementById("sarValue").innerText = `Seçilen modelin SAR değeri: ${sarValue}`;

    // SAR çubuğunun rengini güncelle
    updateSARBarColor(sarValue);
}

// SAR değerine göre çubuğun rengini güncelleyen fonksiyon
function updateSARBarColor(sarValue) {
    let sarBar = document.getElementById("sarBar");
    if (sarValue >= 1.5) {
        sarBar.classList.remove("orange");
        sarBar.classList.remove("green");
        sarBar.classList.add("red");
    } else if (sarValue >= 0.8) {
        sarBar.classList.remove("red");
        sarBar.classList.remove("green");
        sarBar.classList.add("orange");
    } else {
        sarBar.classList.remove("red");
        sarBar.classList.remove("orange");
        sarBar.classList.add("green");
    }
}

// SAR değerini getiren fonksiyon
function getSARValue() {
    const brand = document.getElementById("brandSelect").value;
    const model = document.getElementById("modelSelect").value;

    // Seçilen marka ve modelin SAR değerini al
    const sarValue = getSelectedSARValue(brand, model);

    // SAR değerini ekrana yaz
    document.getElementById("sarValue").innerText = `Seçilen modelin SAR değeri: ${sarValue}`;

    // SAR çubuğunun rengini güncelle
    updateSARBarColor(sarValue);
}

// Seçilen marka ve modelin SAR değerini döndüren yardımcı fonksiyon
function getSelectedSARValue(brand, model) {
    // Sabit bir liste olarak marka ve model bilgileri ile SAR değerleri
    const phoneModels = {
        "Samsung": [
            { model: "Galaxy S24", sar: 1.23 },
            { model: "Galaxy S24+", sar: 1.16 },
            { model: "Galaxy S24 Ultra", sar: 1.26 },
            { model: "Galaxy S23", sar: 0.96 },
            { model: "Galaxy S23+", sar: 0.96 },
            { model: "Galaxy S23 Ultra", sar: 0.96 },
            { model: "Galaxy Z Fold 5", sar: 1.24 },
            { model: "Galaxy Z Flip 5", sar: 0.71 },
            { model: "Galaxy A74", sar: 0.71 },
            { model: "Galaxy A54", sar: 0.69 },
            { model: "Galaxy A34", sar: 0.54 },
            { model: "Galaxy M54", sar: 0.49 },
            { model: "Galaxy M34", sar: 0.89 },
            { model: "Galaxy S22", sar: 1.21 },
            { model: "Galaxy S22+", sar: 0.71 },
            { model: "Galaxy S22 Ultra", sar: 1.04 },
            { model: "Galaxy Z Fold 4", sar: 1.30 },
            { model: "Galaxy Z Flip 4", sar: 1.15 },
            { model: "Galaxy A73", sar: 1.28 },
            { model: "Galaxy A53", sar: 0.88 },
            { model: "Galaxy A33", sar: 0.57 },
            { model: "Galaxy M53", sar: 0.60 },
            { model: "Galaxy M33", sar: 1.042 },
            { model: "Galaxy S21", sar: 0.45 },
            { model: "Galaxy S21+", sar: 0.54 },
            { model: "Galaxy S21 Ultra", sar: 0.71 },
            { model: "Galaxy Z Fold 3", sar: 1.03 },
            { model: "Galaxy Z Flip 3", sar: 0.86 },
            { model: "Galaxy A72", sar: 0.23 },
            { model: "Galaxy A52", sar: 0.34 },
            { model: "Galaxy A32", sar: 0.33 },
            { model: "Galaxy M52", sar: 0.78 },
            { model: "Galaxy M32", sar: 0.56 },
            { model: "Galaxy S20", sar: 0.27 },
            { model: "Galaxy S20+", sar: 0.37 },
            { model: "Galaxy S20 Ultra", sar: 0.31 },
            { model: "Galaxy Z Fold 2", sar: 0.29 },
            { model: "Galaxy Z Flip", sar: 0.36 },
            { model: "Galaxy A71", sar: 0.51 },
            { model: "Galaxy A51", sar: 0.36 },
            { model: "Galaxy A31", sar: 0.48 },
            { model: "Galaxy M51", sar: 0.60 },
            { model: "Galaxy M31", sar: 0.48 }
        ],
        "Apple": [
            { model: "iPhone 15", sar: 0.98 },
            { model: "iPhone 15 Pro", sar: 0.98 },
            { model: "iPhone 15 Plus", sar: 0.98 },
            { model: "iPhone 15 Pro Max", sar: 0.98 },
            { model: "iPhone 14", sar: 0.98 },
            { model: "iPhone 14 Pro", sar: 0.98 },
            { model: "iPhone 14 Plus", sar: 0.99 },
            { model: "iPhone 14 Pro Max", sar: 0.99 },
            { model: "iPhone 13 Mini", sar: 0.97 },
            { model: "iPhone 13", sar: 0.98 },
            { model: "iPhone 13 Pro", sar: 0.98 },
            { model: "iPhone 13 Pro Max", sar: 0.99 },
            { model: "iPhone SE 2022", sar: 1.20 },
            { model: "iPhone 12 Mini", sar: 0.98 },
            { model: "iPhone 12", sar: 0.98 },
            { model: "iPhone 12 Pro", sar: 0.98 },
            { model: "iPhone 12 Pro Max", sar: 0.98 },
            { model: "iPhone SE 2020", sar: 0.97 },
            { model: "iPhone 11", sar: 0.95 },
            { model: "iPhone 11 Pro", sar: 0.95 },
            { model: "iPhone 11 Pro Max", sar: 0.95 },
            { model: "iPhone XR", sar: 0.99 },
            { model: "iPhone XS", sar: 0.99 },
            { model: "iPhone XS Max", sar: 0.99 }
        ],
        "Xiaomi": [
            
            { model: "12", sar: 0.60 },
            { model: "12 Pro", sar: 0.59 },
          
            { model: "12 Lite", sar: 0.99 },
            { model: "12T", sar: 0.99 },
            { model: "12T Pro", sar: 0.99 },
            
            
            { model: "Mi 11", sar: 0.99 },
            { model: "Mi 11 Lite", sar: 0.60 },
            
            { model: "Mi 11 Ultra", sar: 0.55 },
            { model: "Mi 11T", sar: 0.55 },
            { model: "Mi 11T Pro", sar: 0.57 },
            { model: "Mi 10", sar: 0.69 },
            { model: "Mi 10 Lite", sar: 0.79 },
            { model: "Mi 10 Pro", sar: 0.69 },
          
            { model: "Mi 10T", sar: 0.57 },
            { model: "Mi 10T Pro", sar: 0.57 },
            { model: "Mi 9", sar: 1.39 },
            { model: "Mi 9 Lite", sar: 1.42 },
           
            
            { model: "Mi 9T", sar: 1.34 },
            { model: "Mi 9T Pro", sar: 1.03 },
            { model: "Mi 8", sar: 1.01 },
            { model: "Mi 8 Lite", sar: 0.74 },
            
           
        ],
        "Google": [
            
            { model: "Pixel 8", sar: 0.98 },
            { model: "Pixel 8 Pro", sar: 0.84 },
            { model: "Pixel Fold", sar: 0.99 },
            { model: "Pixel 7a", sar: 0.99 },
            { model: "Pixel 7", sar: 0.99 },
            { model: "Pixel 7 Pro", sar: 0.98 },
            { model: "Pixel 6a", sar: 1.31 },
            { model: "Pixel 6", sar: 1.38 },
            { model: "Pixel 6 Pro", sar: 0.99 },
            { model: "Pixel 5a", sar: 0.96 },
            { model: "Pixel 5", sar: 0.96 },
            { model: "Pixel 4a", sar: 1.37 },
            { model: "Pixel 4", sar: 1.19 },
            { model: "Pixel 4 XL", sar: 1.17 },
            { model: "Pixel 3a", sar: 0.69 },
            { model: "Pixel 3", sar: 1.33 },
            { model: "Pixel 3 XL", sar: 1.39 }
        
        ],
        "Oneplus": [
            { model: "12", sar: 0.99 },
            { model: "11", sar: 0.99 },
            { model: "10", sar: 0.99 },
            { model: "10 Pro", sar: 0.87 },
            { model: "10T", sar: 0.96 },
            { model: "9", sar: 0.99 },
            { model: "9 Pro", sar: 0.99 },
            { model: "8", sar: 0.86 },
            { model: "8 Pro", sar: 0.95 },
            { model: "8T", sar: 0.94 },
            { model: "7", sar: 1.16 },
            { model: "7 Pro", sar: 1.19 },
            { model: "7T", sar: 1.04 },
           
            { model: "6", sar: 1.33 },
            { model: "6T", sar: 1.55 }
        ]
        // Diğer marka ve modelleri buraya ekleyebilirsiniz
    };

    // Seçilen marka ve modele ait SAR değerini bul
    const selectedModel = phoneModels[brand].find(item => item.model === model);
    if (selectedModel) {
        return selectedModel.sar;
    } else {
        return "SAR değeri bulunamadı";
    }
}

// Arama çubuğundaki değer değiştiğinde model seçme alanını güncelle
document.getElementById("searchInput").addEventListener("input", handleSearchInput);

// Arama butonuna tıklandığında SAR değerini getir
document.getElementById("searchButton").addEventListener("click", getSARValue1);

// Marka seçildiğinde model seçme alanını güncelle
document.getElementById("brandSelect").addEventListener("change", populateModels);

// SAR değerini getir butonuna tıklandığında SAR değerini getir
document.getElementById("getSarButton").addEventListener("click", getSARValue);
