-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 28 Bulan Mei 2024 pada 18.02
-- Versi server: 10.4.22-MariaDB
-- Versi PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sikab`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `berita`
--

CREATE TABLE `berita` (
  `ID_Berita` int(11) NOT NULL,
  `ID_Burung` int(11) NOT NULL,
  `ID_User` int(11) NOT NULL,
  `Judul` varchar(50) NOT NULL,
  `Deskripsi` text NOT NULL,
  `Waktu` date NOT NULL,
  `Gambar` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `berita`
--

INSERT INTO `berita` (`ID_Berita`, `ID_Burung`, `ID_User`, `Judul`, `Deskripsi`, `Waktu`, `Gambar`) VALUES
(1, 13, 1, 'Mengenal Burung Khas Kalimantan yang Unik dan Mena', 'Pulau Kalimantan merupakan rumah bagi beberapa hutan hujan paling beragam di dunia dan hutan utuh terakhir di Asia Tenggara.\r\nKalimantan merupakan pulau terbesar ketiga di dunia yang memiliki iklim tropis pulau dan ekoregion yang beragam telah menciptakan habitat yang menampung ribuan spesie hewan.', '2024-02-02', 'kakatua.png'),
(2, 13, 1, 'Burung Enggang yang Legendaris, Dikeramatkan Suku ', 'Sekali-sekali merantaulah. Tak puas rasanya kalau tidak melihat burung legend yang satu ini. Mungkin belum banyak yang tahu mengapa burung Enggang sampai dikeramatkan oleh Suku Dayak.', '2024-02-02', 'enggang.png'),
(3, 13, 1, 'Merawat Enggang Gading Dari Ancaman Kepunahan', 'Berdasarkan daftar IUCN tahun 2018 burung Enggang Gading telah termasuk dalam satwa berstatus terancam punah (Critically Endangered)', '2024-02-02', 'engganggading.png'),
(4, 14, 1, 'Mengenal Burung Kuntul Perak, Si Maskot yang Mulai', 'Burung Kuntul Perak kini sudah langka di pesisir Kota Bontang. Bahkan, selama 9 bulan terakhir penampakannya hanya sekali saja. Itupun hanya seekor di pesisir Guntung, Januari silam. ', '2024-02-02', 'kuntulperak.png'),
(5, 15, 1, 'Burung Pelanduk Kalimantan Kembali Ditemukan Setel', 'Satwa endemik berupa Burung Pelanduk Kalimantan (Malacocincla perspicillata) yang diduga mengalami kepunahan sejak tahun 1848 atau 172 tahun yang lalu, kembali ditemukan.', '2024-02-02', 'pelanduk.png'),
(6, 16, 1, 'Rangkong, Burung Keramat Suku Dayak', 'Cerita dan mitos tentang burung enggang berbeda di setiap daerah. Namun bagi Suku Dayak Kalimantan, burung ini merupakan burung keramat. ', '2024-02-02', 'rangkong.png'),
(7, 16, 1, '\'Tioang Batu Kalimantan\', Burung Endemik yang Unik', 'Penampilan mirip burung gagak terlebih dengan bentuk paruh yang besar. Karena alasan itu pula banyak yang mengira burung Tiong Batu Kalimantan atau Bornean bristlehead (Pityriasis gymnocephala) memiliki kekerabatan dengan gagak.', '2024-02-02', 'tiongbatu.png');

-- --------------------------------------------------------

--
-- Struktur dari tabel `burung`
--

CREATE TABLE `burung` (
  `ID_Burung` int(11) NOT NULL,
  `ID_Tempat` int(11) NOT NULL,
  `nama_Burung` varchar(50) NOT NULL,
  `gambar` varchar(50) NOT NULL,
  `deskripsi` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `burung`
--

INSERT INTO `burung` (`ID_Burung`, `ID_Tempat`, `nama_Burung`, `gambar`, `deskripsi`) VALUES
(13, 1, 'sempidan kalimantan', 'sempidan.png', 'Sempidan kalimantan (Lophura bulweri) atau dikenal juga dengan nama Burung Pakiak (Kalimantan Barat) atau Beleang Bulwor adalah burung dari Asia Tenggara dalam keluarga Phasianidae, endemik hutan rimb'),
(14, 1, 'puyuh-gonggong kalimantan', 'puyuh.png', 'Burung Puyuh-gonggong kalimantan (Arborophila hyperythra) adalah salah satu spesies burung di dalam keluarga Phasianidae. Dapat ditemui di Indonesia dan Malaysia. Habitat alaminya adalah hutan dataran'),
(15, 1, 'puyuh merah kalimantan', 'puyuhmerah.png', 'Burung Puyuh kepala-merah (Haematortyx sanguiniceps) adalah salah satu spesies burung di dalam keluarga Phasianidae. Dapat ditemui di Indonesia dan Malaysia. Habitat alaminya adalah hutan dataran rend'),
(16, 1, 'tiong batu kalimantan', 'tiongbatu.png', 'Tiong-batu kalimantan (pityriasis gymnocephala) adalah satu-satunya anggota dari keluarga burung pengicau Pityriaseidae dan genus Pityriasis. Ia merupakan spesies misterius dan jarang dijumpai dari ka'),
(17, 1, 'Kasumba kalimantan', 'kasumba.png', 'Burung Kasumba kalimantan atau Luntur kalimantan (Harpactes whiteheadi) adalah salah satu spesies burung di dalam keluarga Trogonidae. Dapat ditemui di Indonesia dan Malaysia. Habitat alaminya adalah '),
(18, 1, 'Takur gunung', 'takur.png', 'Takur gunung (Megalaima monticola) adalah salah satu spesies burung di dalam keluarga Ramphastidae. Dapat ditemui di Indonesia dan Malaysia. Habitat alaminya adalah hutan dataran rendah lembap subtrop'),
(19, 1, 'Takur tengkuk-emas', 'takuremas.png', 'Takur tengkuk-emas (Megalaima pulcherrima) adalah salah satu spesies burung di dalam keluarga Ramphastidae. Dapat ditemui di Indonesia dan Malaysia. Habitat alaminya adalah hutan dataran rendah lembap'),
(20, 1, 'Takur leher-hitam', 'takur-hitam.png', 'Takur leher-hitam atau Takur kalimantan adalah spesies burung dalam keluarga Ramphastidae. Mereka ditemukan di Indonesia dan Malaysia. Habitat alaminya adalah hutan dataran rendah dan pegunungan lemba'),
(21, 1, 'Madi-hijau perut-biru', 'madi.png', 'Burung Madi-hijau perut-biru (Calyptomena hosii) adalah salah satu spesies burung di dalam keluarga Eurylaimidae. Burung ini endemik hutan dataran tinggi pulau Kalimantan bagian utara. Mereka terancam'),
(22, 1, 'Madi-hijau kepala-putih', 'madiputih.png', 'Burung Madi-hijau kepala-putih (Calyptomena whiteheadi) adalah salah satu spesies burung di dalam keluarga Eurylaimidae. Burung ini hanya dapat ditemui di hutan rimba pegunungan di pulau Kalimantan se'),
(23, 1, 'Tawau dada-hitam', 'tawau.png', 'Tawau dada-hitam (Chlamydochaera jefferyi) adalah spesies burung misterius yang saat ini ditempatkan bersama-sama dengan anis biasa dalam keluarga Turdidae. Burung ini endemik hutan di pulau Kalimanta'),
(24, 1, 'Berencet gunung', 'berencet.png', 'Berencet gunung (Napothera crassa) adalah salah satu spesies burung di dalam keluarga Timaliidae. Dapat ditemui di Indonesia dan Malaysia. Habitat alaminya adalah hutan dataran rendah lembap subtropis');

-- --------------------------------------------------------

--
-- Struktur dari tabel `galeri`
--

CREATE TABLE `galeri` (
  `ID_Galeri` int(11) NOT NULL,
  `ID_Burung` int(11) NOT NULL,
  `Gambar` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `galeri`
--

INSERT INTO `galeri` (`ID_Galeri`, `ID_Burung`, `Gambar`) VALUES
(1, 13, 'sempidan1.png'),
(2, 13, 'sempidan2.png'),
(5, 13, 'sempidan3.png'),
(6, 13, 'sempidan4.png');

-- --------------------------------------------------------

--
-- Struktur dari tabel `habitat`
--

CREATE TABLE `habitat` (
  `ID_Tempat` int(11) NOT NULL,
  `nama_Tempat` varchar(50) NOT NULL,
  `lokasi` varchar(50) NOT NULL,
  `gambar` varchar(50) NOT NULL,
  `deskripsi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `habitat`
--

INSERT INTO `habitat` (`ID_Tempat`, `nama_Tempat`, `lokasi`, `gambar`, `deskripsi`) VALUES
(1, 'Taman Nasional Kutai', 'Kutai Timur', 'kutai.png', 'Terletak di Kabupaten Kutai Timur, Taman Nasional Kutai merupakan salah satu taman nasional terluas di Indonesia. Hutan hujan tropis yang lebat di taman ini menjadi habitat bagi ratusan spesies burung, termasuk beberapa spesies yang langka dan endemik. Beberapa burung yang dapat Anda temukan di Taman Nasional Kutai antara lain'),
(2, 'Kawasan Karst Sangkulirang', 'Kutai Timur', 'karst.png', 'Cagar Alam Sungai Wain terletak di Kabupaten Kutai Barat, Kalimantan Timur. Cagar alam ini terkenal dengan populasi orangutannya yang terancam punah. Namun, selain orangutan, Sungai Wain juga merupakan habitat bagi berbagai spesies burung, seperti:'),
(3, 'Cagar Alam Sungai Wain', 'Kutai Timur', 'sungaiwain.png', 'Kawasan Karst Sangkulirang terletak di Kabupaten Kutai Timur, Kalimantan Timur. Kawasan karst ini memiliki gua-gua yang menjadi habitat bagi beberapa spesies burung gua, seperti:');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `ID_User` int(11) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `name_Author` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`ID_User`, `Username`, `Password`, `name_Author`) VALUES
(1, 'user', 'user', 'Unknown Author');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `berita`
--
ALTER TABLE `berita`
  ADD PRIMARY KEY (`ID_Berita`),
  ADD KEY `berita` (`ID_Burung`),
  ADD KEY `user` (`ID_User`);

--
-- Indeks untuk tabel `burung`
--
ALTER TABLE `burung`
  ADD PRIMARY KEY (`ID_Burung`),
  ADD KEY `ID_Tempat` (`ID_Tempat`);

--
-- Indeks untuk tabel `galeri`
--
ALTER TABLE `galeri`
  ADD PRIMARY KEY (`ID_Galeri`),
  ADD KEY `burung` (`ID_Burung`);

--
-- Indeks untuk tabel `habitat`
--
ALTER TABLE `habitat`
  ADD PRIMARY KEY (`ID_Tempat`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID_User`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `berita`
--
ALTER TABLE `berita`
  MODIFY `ID_Berita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `burung`
--
ALTER TABLE `burung`
  MODIFY `ID_Burung` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT untuk tabel `galeri`
--
ALTER TABLE `galeri`
  MODIFY `ID_Galeri` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `habitat`
--
ALTER TABLE `habitat`
  MODIFY `ID_Tempat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `ID_User` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `berita`
--
ALTER TABLE `berita`
  ADD CONSTRAINT `berita` FOREIGN KEY (`ID_Burung`) REFERENCES `burung` (`ID_Burung`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user` FOREIGN KEY (`ID_User`) REFERENCES `user` (`ID_User`);

--
-- Ketidakleluasaan untuk tabel `burung`
--
ALTER TABLE `burung`
  ADD CONSTRAINT `burung_ibfk_1` FOREIGN KEY (`ID_Tempat`) REFERENCES `habitat` (`ID_Tempat`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `galeri`
--
ALTER TABLE `galeri`
  ADD CONSTRAINT `burung` FOREIGN KEY (`ID_Burung`) REFERENCES `burung` (`ID_Burung`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
