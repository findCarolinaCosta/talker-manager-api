DROP DATABASE IF EXISTS `talker`;
CREATE DATABASE `talker`;

CREATE TABLE `talker`.`person` (
	`id` INT(50) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL,
	`age` INT NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO talker.person(name,age,id) VALUES ('Henrique Albuquerque',62,1);
INSERT INTO talker.person(name,age,id) VALUES ('Heloísa Albuquerque',67,2);
INSERT INTO talker.person(name,age,id) VALUES ('Ricardo Xavier Filho',33,3);
INSERT INTO talker.person(name,age,id) VALUES ('Marcos Costa',24,4);

CREATE TABLE `talker`.`talk` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`watchedAt` DATE NOT NULL,
	`rate` INT,
	`person_id` INT,
	PRIMARY KEY (`id`),
  FOREIGN KEY (`person_id`) REFERENCES `talker`.`person` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO talker.talk(person_id,watchedAt,rate) VALUES (1,'2020/10/23',5);
INSERT INTO talker.talk(person_id,watchedAt,rate) VALUES (2,'2020/10/23',5);
INSERT INTO talker.talk(person_id,watchedAt,rate) VALUES (3,'2020/10/23',5);
INSERT INTO talker.talk(person_id,watchedAt,rate) VALUES (4,'2020/10/23',5);