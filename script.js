// Marka seçildiğinde model seçme alanını güncelleyen fonksiyon
function populateModels() {
    const brand = document.getElementById("brandSelect").value;
    const modelSelect = document.getElementById("modelSelect");
    modelSelect.innerHTML = "<option value=''>Model Seçiniz</option>";

    // Sabit bir liste olarak marka ve model bilgileri ile SAR değerleri
    const phoneModels = {
        "Samsung": [
            { model: "Galaxy S24", sar: 0.65 },
            { model: "Galaxy S24+", sar: 0.67 },
            { model: "Galaxy S24 Ultra", sar: 0.71 },
            { model: "Galaxy S23", sar: 0.71 },
            { model: "Galaxy S23+", sar: 0.71 },
            { model: "Galaxy S23 Ultra", sar: 0.71 },
            { model: "Galaxy Z Fold 5", sar: 0.71 },
            { model: "Galaxy Z Flip 5", sar: 0.71 },
            { model: "Galaxy A74", sar: 0.71 },
            { model: "Galaxy A54", sar: 0.71 },
            { model: "Galaxy A34", sar: 0.71 },
            { model: "Galaxy M54", sar: 0.71 },
            { model: "Galaxy M34", sar: 0.71 },
            { model: "Galaxy S22", sar: 0.71 },
            { model: "Galaxy S22+", sar: 0.71 },
            { model: "Galaxy S22 Ultra", sar: 0.71 },
            { model: "Galaxy Z Fold 4", sar: 0.71 },
            { model: "Galaxy Z Flip 4", sar: 0.71 },
            { model: "Galaxy A73", sar: 0.71 },
            { model: "Galaxy A53", sar: 0.71 },
            { model: "Galaxy A33", sar: 0.71 },
            { model: "Galaxy M53", sar: 0.71 },
            { model: "Galaxy M33", sar: 0.71 },
            { model: "Galaxy S21", sar: 0.71 },
            { model: "Galaxy S21+", sar: 0.71 },
            { model: "Galaxy S21 Ultra", sar: 0.71 },
            { model: "Galaxy Z Fold 3", sar: 0.71 },
            { model: "Galaxy Z Flip 3", sar: 0.71 },
            { model: "Galaxy A72", sar: 0.71 },
            { model: "Galaxy A52", sar: 0.71 },
            { model: "Galaxy A32", sar: 0.71 },
            { model: "Galaxy M52", sar: 0.71 },
            { model: "Galaxy M32", sar: 0.71 },
            { model: "Galaxy S20", sar: 0.71 },
            { model: "Galaxy S20+", sar: 0.71 },
            { model: "Galaxy S20 Ultra", sar: 0.71 },
            { model: "Galaxy Z Fold 2", sar: 0.71 },
            { model: "Galaxy Z Flip", sar: 0.71 },
            { model: "Galaxy A71", sar: 0.71 },
            { model: "Galaxy A51", sar: 0.71 },
            { model: "Galaxy A31", sar: 0.71 },
            { model: "Galaxy M51", sar: 0.71 },
            { model: "Galaxy M31", sar: 0.71 }
        ],
        "Apple": [
            { model: "iPhone 15", sar: 0.99 },
            { model: "iPhone 15 Pro", sar: 0.99 },
            { model: "iPhone Pro Max", sar: 0.99 },
            { model: "iPhone 14 Mini", sar: 0.99 },
            { model: "iPhone 14", sar: 1.17 },
            { model: "iPhone 14 Pro", sar: 1.18 },
            { model: "iPhone 14 Pro Max", sar: 1.18 },
            { model: "iPhone 13 Mini", sar: 1.18 },
            { model: "iPhone 13", sar: 1.18 },
            { model: "iPhone 13 Pro", sar: 1.18 },
            { model: "iPhone 13 Pro Max", sar: 1.18 },
            { model: "iPhone SE 2022", sar: 1.18 },
            { model: "iPhone 12 Mini", sar: 1.18 },
            { model: "iPhone 12", sar: 1.18 },
            { model: "iPhone 12 Pro", sar: 1.18 },
            { model: "iPhone 12 Pro Max", sar: 1.18 },
            { model: "iPhone SE 2020", sar: 1.18 },
            { model: "iPhone 11", sar: 1.18 },
            { model: "iPhone 11 Pro", sar: 1.18 },
            { model: "iPhone 11 Pro Max", sar: 1.18 },
            { model: "iPhone XR", sar: 0.99 },
            { model: "iPhone XS", sar: 0.99 },
            { model: "iPhone XS Max", sar: 0.99 }
        ],
        "Xiaomi": [
            { model: "Mi 11", sar: 0.76 },
            { model: "Redmi Note 10", sar: 0.89 },
            { model: "Poco X3", sar: 0.92 }
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
function getSARValue1() { //diğer getSAR ile ismini aynı yapmışsın aynı görevleri vermişsin araya bastıgında aramasını istiyosan arama yerine yazdıgın değeri alıp işlemen lazm
   
    const query = document.getElementById("searchInput").value; //arama yerine yazdıgını aldık aşağıda da onu işledik ama sen model de istediğin için sadece Samsung vs yazarak sar değeri bulamadı
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
    if (sarValue >= 1.6) {
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
            { model: "Galaxy S24", sar: 0.65 },
            { model: "Galaxy S24+", sar: 0.67 },
            { model: "Galaxy S24 Ultra", sar: 0.71 },
            { model: "Galaxy S23", sar: 0.71 },
            { model: "Galaxy S23+", sar: 0.71 },
            { model: "Galaxy S23 Ultra", sar: 0.71 },
            { model: "Galaxy Z Fold 5", sar: 0.71 },
            { model: "Galaxy Z Flip 5", sar: 0.71 },
            { model: "Galaxy A74", sar: 0.71 },
            { model: "Galaxy A54", sar: 0.71 },
            { model: "Galaxy A34", sar: 0.71 },
            { model: "Galaxy M54", sar: 0.71 },
            { model: "Galaxy M34", sar: 0.71 },
            { model: "Galaxy S22", sar: 0.71 },
            { model: "Galaxy S22+", sar: 0.71 },
            { model: "Galaxy S22 Ultra", sar: 0.71 },
            { model: "Galaxy Z Fold 4", sar: 0.71 },
            { model: "Galaxy Z Flip 4", sar: 0.71 },
            { model: "Galaxy A73", sar: 0.71 },
            { model: "Galaxy A53", sar: 0.71 },
            { model: "Galaxy A33", sar: 0.71 },
            { model: "Galaxy M53", sar: 0.71 },
            { model: "Galaxy M33", sar: 0.71 },
            { model: "Galaxy S21", sar: 0.71 },
            { model: "Galaxy S21+", sar: 0.71 },
            { model: "Galaxy S21 Ultra", sar: 0.71 },
            { model: "Galaxy Z Fold 3", sar: 0.71 },
            { model: "Galaxy Z Flip 3", sar: 0.71 },
            { model: "Galaxy A72", sar: 0.71 },
            { model: "Galaxy A52", sar: 0.71 },
            { model: "Galaxy A32", sar: 0.71 },
            { model: "Galaxy M52", sar: 0.71 },
            { model: "Galaxy M32", sar: 0.71 },
            { model: "Galaxy S20", sar: 0.71 },
            { model: "Galaxy S20+", sar: 0.71 },
            { model: "Galaxy S20 Ultra", sar: 0.71 },
            { model: "Galaxy Z Fold 2", sar: 0.71 },
            { model: "Galaxy Z Flip", sar: 0.71 },
            { model: "Galaxy A71", sar: 0.71 },
            { model: "Galaxy A51", sar: 0.71 },
            { model: "Galaxy A31", sar: 0.71 },
            { model: "Galaxy M51", sar: 0.71 },
            { model: "Galaxy M31", sar: 0.71 }
        ],
        "Apple": [
            { model: "iPhone 15", sar: 0.99 },
            { model: "iPhone 15 Pro", sar: 0.99 },
            { model: "iPhone Pro Max", sar: 0.99 },
            { model: "iPhone 14 Mini", sar: 0.99 },
            { model: "iPhone 14", sar: 1.17 },
            { model: "iPhone 14 Pro", sar: 1.18 },
            { model: "iPhone 14 Pro Max", sar: 1.18 },
            { model: "iPhone 13 Mini", sar: 1.18 },
            { model: "iPhone 13", sar: 1.18 },
            { model: "iPhone 13 Pro", sar: 1.18 },
            { model: "iPhone 13 Pro Max", sar: 1.18 },
            { model: "iPhone SE 2022", sar: 1.18 },
            { model: "iPhone 12 Mini", sar: 1.18 },
            { model: "iPhone 12", sar: 1.18 },
            { model: "iPhone 12 Pro", sar: 1.18 },
            { model: "iPhone 12 Pro Max", sar: 1.18 },
            { model: "iPhone SE 2020", sar: 1.18 },
            { model: "iPhone 11", sar: 1.18 },
            { model: "iPhone 11 Pro", sar: 1.18 },
            { model: "iPhone 11 Pro Max", sar: 1.18 },
            { model: "iPhone XR", sar: 0.99 },
            { model: "iPhone XS", sar: 0.99 },
            { model: "iPhone XS Max", sar: 0.99 }
        ],
        "Xiaomi": [
            { model: "Mi 11", sar: 0.76 },
            { model: "Redmi Note 10", sar: 0.89 },
            { model: "Poco X3", sar: 0.92 }
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
