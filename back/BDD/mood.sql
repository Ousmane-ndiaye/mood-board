-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Jeu 18 Avril 2019 à 12:54
-- Version du serveur :  5.7.25-0ubuntu0.18.10.2
-- Version de PHP :  7.2.15-0ubuntu0.18.10.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `mood`
--

-- --------------------------------------------------------

--
-- Structure de la table `justificatif`
--

CREATE TABLE `justificatif` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `mood` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `justificatif`
--

INSERT INTO `justificatif` (`id`, `content`, `mood`) VALUES
(1, 'Il fait chaud', 6),
(2, 'Il fait chaud', 7);

-- --------------------------------------------------------

--
-- Structure de la table `mood`
--

CREATE TABLE `mood` (
  `id` int(11) NOT NULL,
  `etat` int(1) NOT NULL,
  `jour` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `mood`
--

INSERT INTO `mood` (`id`, `etat`, `jour`) VALUES
(6, -1, '2019-4-18'),
(7, -1, '2019-4-18'),
(8, 1, '2019-4-18');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `justificatif`
--
ALTER TABLE `justificatif`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mood_justificatif` (`mood`);

--
-- Index pour la table `mood`
--
ALTER TABLE `mood`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `justificatif`
--
ALTER TABLE `justificatif`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `mood`
--
ALTER TABLE `mood`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `justificatif`
--
ALTER TABLE `justificatif`
  ADD CONSTRAINT `mood_justificatif` FOREIGN KEY (`mood`) REFERENCES `mood` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
