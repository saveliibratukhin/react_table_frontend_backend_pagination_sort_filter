create table goods(
    id Serial primary key,
    date date,
    name varchar(255),
    amount integer,
    distance integer
);

insert into goods (name, date, amount, distance) values
    ('good1', '01.05.2000', 50, 500),
    ('good2', '01.05.2001', 540, 50),
    ('foo', '01.05.2001', 540, 78),
    ('bar', '01.05.2001', 252, 50),
    ('lorem', '01.05.2002', 12, 54),
    ('ipsum', '01.05.2021', 25, 454),
    ('dolor', '01.05.2002', 25, 50),
    ('sit', '01.05.2031', 68, 54),
    ('amet', '01.05.2021', 85, 50),
    ('consectetur', '01.06.2001', 540, 54)