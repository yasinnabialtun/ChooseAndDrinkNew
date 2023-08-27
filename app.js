
/*ChatGPT ile oluşturuldu*/

// Meyvelerin vitamin bilgilerini ve faydalarını içeren bir nesne oluştur
const meyveBilgileri = {
  Ananas: {
    vitaminler: "C vitamini, Mangan",
    faydalar: "Bağışıklık sistemini güçlendirir, sindirime yardımcı olur.",
  },
  Armut: {
    vitaminler: "C vitamini, K vitamini",
    faydalar: "Kan şekerini düzenler, sindirim sağlığını destekler.",
  },
  Avakado: {
    vitaminler: "C vitamini, E vitamini, Potasyum",
    faydalar: "Kalp sağlığını destekler, cilt ve saç sağlığını korur.",
  },
  Böğürtlen: {
    vitaminler: "C vitamini, K vitamini, Magnezyum",
    faydalar: "Antioksidan içeriği yüksektir, hafızayı güçlendirir",
  },
  Çilek: {
    vitaminler: "C vitamini, K vitamini, Lif",
    faydalar: "Antioksidan etkisi vardır, bağışıklığı destekler.",
  },
  Elma: {
    vitaminler: "C vitamini, K vitamini, Lif",
    faydalar: "Kolesterol seviyesini düşürür, sindirimi kolaylaştırır.",
  },
  Greyfurt: {
    vitaminler: "C vitamini, A vitamini, Potasyum",
    faydalar: "Kilo vermeye yardımcı olur, kan basıncını düzenler.",
  },
  Karpuz: {
    vitaminler: "C vitamini, A vitamini, Potasyum",
    faydalar: "Su içeriği yüksek, hidrasyon sağlar.",
  },
  Kavun: {
    vitaminler: "C vitamini, A vitamini, Potasyum",
    faydalar: "Kalp sağlığını korur, göz sağlığını destekler.",
  },
  Kivi: {
    vitaminler: "C vitamini, K vitamini, Lif",
    faydalar: "Bağışıklığı güçlendirir, cilt sağlığını destekler.",
  },
  Mango: {
    vitaminler: "C vitamini, A vitamini, K vitamini",
    faydalar: "Göz sağlığını destekler, sindirimi kolaylaştırır.",
  },
  Muz: {
    vitaminler: "C vitamini, Potasyum, Lif",
    faydalar: "Kasları destekler, enerji verir.",
  },
};

// Tıklanan meyveleri saklamak için boş bir dizi oluştur
let secilenMeyveler = [];

// Tüm meyve görsellerine tıklama olay dinleyicisi ekle
const meyveGorselleri = document.querySelectorAll(".fruits-img");
meyveGorselleri.forEach((img) => {
  img.addEventListener("click", () => {
    // Tıklanan görselin opaklığını değiştir
    img.style.opacity = img.style.opacity === "0.9" ? "1" : "0.5";

    // Tıklanan meyvenin adını al, adı <h4> öğesinin içeriğinden alınır
    const meyveAdi = img.nextElementSibling.textContent;

    // Eğer meyve daha önceden seçilmemişse, listeye ekle
    if (!secilenMeyveler.includes(meyveAdi)) {
      secilenMeyveler.push(meyveAdi);
    }
  });
});

// "Tamamla" butonuna tıklama olay dinleyicisi ekle
const tamamlaBtn = document.querySelector(".tamamla-btn");
tamamlaBtn.addEventListener("click", () => {
  // Sonuçları göstermek için bir div öğesi seç
  const sonuclarDiv = document.querySelector(".sonuclar");

  // Sonuçları içeren bir metin oluştur
  let sonucMetni = "<h3>Seçtiğiniz meyvelerin içerikleri:</h3>";

  secilenMeyveler.forEach((meyve) => {
    const vitaminler = meyveBilgileri[meyve].vitaminler;
    const faydalar = meyveBilgileri[meyve].faydalar;
    sonucMetni += `<p>${meyve}: ${vitaminler}</p>`;
    sonucMetni += `<p>Faydaları: ${faydalar}</p>`;
  });

  // Sonuçları sayfanın altına yazdır
  sonuclarDiv.innerHTML = sonucMetni;
});

// "Sıfırla" butonuna tıklama olay dinleyicisi ekle
const sifirlaBtn = document.querySelector(".sifirla-btn");
sifirlaBtn.addEventListener("click", () => {
  // Tüm meyve görsellerinin opaklığını sıfırla
  meyveGorselleri.forEach((img) => {
    img.style.opacity = "1";
  });

  // Seçilen meyveleri sıfırla
  secilenMeyveler = [];

  // Sonuçları temizle
  const sonuclarDiv = document.querySelector(".sonuclar");
  sonuclarDiv.innerHTML = "";
});



