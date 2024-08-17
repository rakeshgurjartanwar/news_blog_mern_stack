----post table
---comment table
---- views table
--- category table
---user table
CREATE TABLE posts(
    post_id int primary key auto_increment,
    post_title varchar(255),
    post_thumbnail varchar(255),
    post_tags varchar(255),
    post_description text,
    post_author int,
    post_category int,
    post_published varchar(255),
    post_status int default 1
)
CREATE TABLE users(
    user_id primary key int auto_increment,
    user_name varchar(100),
    user_email varchar(50),
    user_type int,
    user_status int default 1
)
CREATE TABLE category (
   category_id primary key int auto_increment,
    name varchar(100),
    is_sub int,
    category_status int
)
CREATE TABLE comment (
   comment_id primary key int auto_increment,
    user_id int,
    post_id int,
    content text,
    comment_status int
)
CREATE TABLE views(
    view_id int primary key auto_increment,
    view_count int,
    post_id int
)