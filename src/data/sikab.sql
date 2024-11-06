-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 09 Jun 2024 pada 17.06
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
  `Judul` varchar(100) NOT NULL,
  `Sumber` varchar(100) NOT NULL,
  `Deskripsi` text NOT NULL,
  `Waktu` date NOT NULL,
  `Gambar` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `berita`
--

INSERT INTO `berita` (`ID_Berita`, `ID_Burung`, `ID_User`, `Judul`, `Sumber`, `Deskripsi`, `Waktu`, `Gambar`) VALUES
(1, 13, 1, 'Mengenal Burung Khas Kalimantan yang Unik dan Menarik', '', 'Pulau Kalimantan merupakan rumah bagi beberapa hutan hujan paling beragam di dunia dan hutan utuh terakhir di Asia Tenggara.\r\nKalimantan merupakan pulau terbesar ketiga di dunia yang memiliki iklim tropis pulau dan ekoregion yang beragam telah menciptakan habitat yang menampung ribuan spesie hewan.', '2024-02-02', 'kakatua.png'),
(2, 13, 1, 'Burung Enggang yang Legendaris, Dikeramatkan Suku Dayak', '', 'Sekali-sekali merantaulah. Tak puas rasanya kalau tidak melihat burung legend yang satu ini. Mungkin belum banyak yang tahu mengapa burung Enggang sampai dikeramatkan oleh Suku Dayak.', '2024-02-02', 'enggang.png'),
(3, 13, 8, 'Merawat Enggang Gading Dari Ancaman Kepunahan', '', 'Berdasarkan daftar IUCN tahun 2018 burung Enggang Gading telah termasuk dalam satwa berstatus terancam punah (Critically Endangered)', '2024-02-02', 'engganggading.png'),
(4, 14, 1, 'Mengenal Burung Kuntul Perak, Si Maskot yang Mulai Langka', '', 'Burung Kuntul Perak kini sudah langka di pesisir Kota Bontang. Bahkan, selama 9 bulan terakhir penampakannya hanya sekali saja. Itupun hanya seekor di pesisir Guntung, Januari silam. ', '2024-02-02', 'kuntulperak.png'),
(5, 15, 1, 'Burung Pelanduk Kalimantan Kembali Ditemukan Setelah 172 Tahun \"Hilang\"', '', 'Satwa endemik berupa Burung Pelanduk Kalimantan (Malacocincla perspicillata) yang diduga mengalami kepunahan sejak tahun 1848 atau 172 tahun yang lalu, kembali ditemukan.', '2024-02-02', 'pelanduk.png'),
(6, 16, 18, 'Rangkong, Burung Keramat Suku Dayak', '', 'Cerita dan mitos tentang burung enggang berbeda di setiap daerah. Namun bagi Suku Dayak Kalimantan, burung ini merupakan burung keramat. ', '2024-02-02', 'rangkong.png'),
(7, 16, 3, '\'Tioang Batu Kalimantan\', Burung Endemik yang Unik Hidup di Pulau Kalimantan', '', 'Penampilan mirip burung gagak terlebih dengan bentuk paruh yang besar. Karena alasan itu pula banyak yang mengira burung Tiong Batu Kalimantan atau Bornean bristlehead (Pityriasis gymnocephala) memiliki kekerabatan dengan gagak.', '2024-02-02', 'tiongbatu.png');

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
(6, 13, 'sempidan4.png'),
(11, 24, 'berencet.jpg'),
(12, 24, 'berencet1.jpg'),
(13, 24, 'berencet2.jpg'),
(14, 24, 'berencet3.jpg'),
(15, 17, 'kasumba.jpg'),
(16, 17, 'kasumba1.jpg'),
(17, 17, 'kasumba2.jpg'),
(18, 17, 'kasumba3.jpg'),
(21, 22, 'madikepalaputih.jpg'),
(22, 22, 'madikepalaputih2.jpg'),
(23, 22, 'madikepalaputih3.jpg'),
(24, 22, 'madikepalaputih1.jpg'),
(27, 21, 'madiperutbiru.jpg'),
(28, 21, 'madiperutbiru2.jpg'),
(29, 21, 'madiperutbiru1.jpg'),
(32, 14, 'puyuhgonggong1.jpg'),
(33, 14, 'puyuhgonggong2.jpg'),
(34, 14, 'puyuhgonggong3.jpg'),
(35, 14, 'puyuhgonggong4.jpg'),
(36, 14, 'puyuhgonggong5.jpg'),
(39, 15, 'puyuhkepalamerah.jpg'),
(40, 15, 'puyuhkepalamerah2.jpg'),
(41, 15, 'puyuhkepalamerah1.jpg'),
(42, 18, 'takurgunung1.jpg'),
(43, 18, 'takurgunung2.jpg'),
(44, 18, 'takurgunung3.jpg'),
(48, 20, 'takurleherhitam.jpg'),
(49, 20, 'takurleherhitam1.jpg'),
(50, 20, 'takurleherhitam3.jpg'),
(51, 20, 'takurleherhitam2.jpg'),
(52, 19, 'takurtengkukemas.jpg'),
(53, 19, 'takurtengkukemas1.jpg'),
(54, 19, 'takurtengkukemas2.jpg'),
(55, 19, 'takurtengkukemas3.j[g'),
(56, 23, 'tawau.jpg'),
(57, 23, 'tawau1.jpg'),
(58, 23, 'tawau2.jpg'),
(59, 23, 'tawau3.jpg'),
(60, 16, 'tiongbatu1.jpg'),
(61, 16, 'tiongbatu2.jpg'),
(62, 16, 'tiongbatu3.jpg'),
(63, 16, 'tiongbatu4.jpg'),
(64, 16, 'tiongbatu5.jpg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `habitat`
--

CREATE TABLE `habitat` (
  `ID_Tempat` int(11) NOT NULL,
  `nama_Tempat` varchar(50) NOT NULL,
  `lokasi` varchar(50) NOT NULL,
  `gambar` varchar(50) NOT NULL,
  `map` varchar(500) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `deskripsi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `habitat`
--

INSERT INTO `habitat` (`ID_Tempat`, `nama_Tempat`, `lokasi`, `gambar`, `map`, `alamat`, `deskripsi`) VALUES
(1, 'Taman Nasional Kutai', 'Kutai Timur', 'kutai.png', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7342484202204!2d117.47474307363885!3d0.37195236394128717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320a3998f3e400f9%3A0x971895ae761d4e05!2s(Sangkima%20Jungle%20Park)%20Taman%20Nasional%20Kutai!5e0!3m2!1sid!2sid!4v1717058730380!5m2!1sid!2sid', '0°22\'19. 117°28\'38. Gg. 0, RT.3, Sangkima Lama, Kec. Sangatta Sel., Kabupaten Kutai Timur, Kalimanta', 'Terletak di Kabupaten Kutai Timur, Taman Nasional Kutai merupakan salah satu taman nasional terluas di Indonesia. Hutan hujan tropis yang lebat di taman ini menjadi habitat bagi ratusan spesies burung, termasuk beberapa spesies yang langka dan endemik. Beberapa burung yang dapat Anda temukan di Taman Nasional Kutai antara lain'),
(2, 'Kawasan Karst Sangkulirang', 'Kutai Timur', 'karst.png', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7342484202204!2d117.47474307363885!3d0.37195236394128717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320a3998f3e400f9%3A0x971895ae761d4e05!2s(Sangkima%20Jungle%20Park)%20Taman%20Nasional%20Kutai!5e0!3m2!1sid!2sid!4v1717058730380!5m2!1sid!2sid', '0°22\'19. 117°28\'38. Gg. 0, RT.3, Sangkima Lama, Kec. Sangatta Sel., Kabupaten Kutai Timur, Kalimanta', 'Cagar Alam Sungai Wain terletak di Kabupaten Kutai Barat, Kalimantan Timur. Cagar alam ini terkenal dengan populasi orangutannya yang terancam punah. Namun, selain orangutan, Sungai Wain juga merupakan habitat bagi berbagai spesies burung, seperti:'),
(3, 'Cagar Alam Sungai Wain', 'Kutai Timur', 'sungaiwain.png', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0213102920716!2d116.83510216769518!3d-1.1452497329038573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14a2c3a41846b%3A0x8fbf08ad5ecba082!2sHutan%20Lindung%20Sungai%20Wain!5e0!3m2!1sid!2sid!4v1717056977446!5m2!1sid!2sid', 'VR3Q+VVW, Karang Joang, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76127', 'Kawasan Karst Sangkulirang terletak di Kabupaten Kutai Timur, Kalimantan Timur. Kawasan karst ini memiliki gua-gua yang menjadi habitat bagi beberapa spesies burung gua, seperti:');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `ID_User` int(11) NOT NULL,
  `Email` varchar(250) NOT NULL,
  `Password` varchar(150) NOT NULL,
  `name_Author` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`ID_User`, `Email`, `Password`, `name_Author`) VALUES
(1, 'user', 'user', 'Unknown Author'),
(3, 'zakifauzanrabb@gmail.com', '$2b$10$PyvE5qM5foq1YzPSvZseSOXz5F2jnrZ1m.kxsDDhDADXXW9y4nDkq', 'zaki'),
(4, 'anug@gmail.com', '$2b$10$3eI84ZYi7CtYTxOJvyTa2.CZvquIZZZ5LXSFRbFEq..HJk46ilJBW', 'anug'),
(6, 'rey@gmail.com', '$2b$10$4cTdFao52zAccgv.bxncLuvoZe4a.n6/01aZ80pm6Jkeql8DjRUvS', 'rey'),
(7, 'rehan@gmail.com', '$2b$10$z9r2SsjYPx6pIBWPyxrI8uL5kNv0VpTxBJsj/SXv1sluVoazfCAvu', 'rehan'),
(8, 'rayhanfadlur111@gmail.com', '$2b$10$H7YhapGBkeEuDBYyjvGawOQ7u3pihP7Tm2QkMWuh2UYUSyK6JnZoe', 'rayhan'),
(10, 'iki@gmail.com', '$2b$10$DYzjEVU9oHxD/o9ZPlZA1.q0dFYrMOTpGJCTW3hfJ9.j6OYhl/oVK', 'rizki'),
(11, 'beabadoobee@gmail.com', '$2b$10$XDmoarw1oNrvRa41Lr47q.FqcGN7QDlJxePRNxryL0zr4kJ9BXqly', 'Beabadoobee'),
(18, 'rayhan@gmail.com', '$2b$10$.1ohAitcplzaEGhMgxWyF.19Dmm3l3zE3.hQqEt3KGMveQd4U1OCK', 'rayhan'),
(26, 'bima@gmail.com', '$2b$10$bnEdzyvasgC7kAOM8CYsu.UhuTr553bDww/TywwSeE1g6G/ntZj/m', 'bima');

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
  ADD PRIMARY KEY (`ID_User`),
  ADD UNIQUE KEY `Email` (`Email`);

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
  MODIFY `ID_Galeri` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT untuk tabel `habitat`
--
ALTER TABLE `habitat`
  MODIFY `ID_Tempat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `ID_User` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

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
