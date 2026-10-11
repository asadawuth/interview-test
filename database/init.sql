--
-- PostgreSQL database dump
--

\restrict LzWewP2fFn1VBkKA21Z8sALovfxFNqDchh98e4eFbiewqofnNKfgcM8degngDdv

-- Dumped from database version 18.4
-- Dumped by pg_dump version 18.4

-- Started on 2026-10-07 21:54:37

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 25309)
-- Name: customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer (
    id integer NOT NULL,
    customer_code character varying(5) NOT NULL,
    customer_name character varying(255) NOT NULL,
    customer_address character varying(255),
    customer_postcode character varying(5),
    contactperson character varying(255)
);


ALTER TABLE public.customer OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 25308)
-- Name: customer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.customer_id_seq OWNER TO postgres;

--
-- TOC entry 5053 (class 0 OID 0)
-- Dependencies: 219
-- Name: customer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customer_id_seq OWNED BY public.customer.id;


--
-- TOC entry 224 (class 1259 OID 25338)
-- Name: employee; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employee (
    id integer NOT NULL,
    first_name character varying(100) NOT NULL,
    last_name character varying(100) NOT NULL,
    age integer,
    tel character varying(10),
    type character varying(50)
);


ALTER TABLE public.employee OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 25337)
-- Name: employee_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.employee_id_seq OWNER TO postgres;

--
-- TOC entry 5054 (class 0 OID 0)
-- Dependencies: 223
-- Name: employee_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.employee_id_seq OWNED BY public.employee.id;


--
-- TOC entry 222 (class 1259 OID 25323)
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    id integer NOT NULL,
    product_code character varying(5) NOT NULL,
    product_name character varying(255) NOT NULL,
    product_type character varying(50),
    unitprice numeric(12,2) NOT NULL,
    stock_qty integer DEFAULT 0 NOT NULL,
    unit character varying(50)
);


ALTER TABLE public.product OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 25322)
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.product_id_seq OWNER TO postgres;

--
-- TOC entry 5055 (class 0 OID 0)
-- Dependencies: 221
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- TOC entry 226 (class 1259 OID 25348)
-- Name: salesorder; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.salesorder (
    id integer NOT NULL,
    ordernumber integer NOT NULL,
    customer_code character varying(50) NOT NULL,
    product_code character varying(50) NOT NULL,
    salesqty integer NOT NULL,
    status character varying(50),
    employee integer NOT NULL
);


ALTER TABLE public.salesorder OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 25347)
-- Name: salesorder_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.salesorder_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.salesorder_id_seq OWNER TO postgres;

--
-- TOC entry 5056 (class 0 OID 0)
-- Dependencies: 225
-- Name: salesorder_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.salesorder_id_seq OWNED BY public.salesorder.id;


--
-- TOC entry 4871 (class 2604 OID 25312)
-- Name: customer id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer ALTER COLUMN id SET DEFAULT nextval('public.customer_id_seq'::regclass);


--
-- TOC entry 4874 (class 2604 OID 25341)
-- Name: employee id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee ALTER COLUMN id SET DEFAULT nextval('public.employee_id_seq'::regclass);


--
-- TOC entry 4872 (class 2604 OID 25326)
-- Name: product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- TOC entry 4875 (class 2604 OID 25351)
-- Name: salesorder id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salesorder ALTER COLUMN id SET DEFAULT nextval('public.salesorder_id_seq'::regclass);


--
-- TOC entry 5041 (class 0 OID 25309)
-- Dependencies: 220
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer (id, customer_code, customer_name, customer_address, customer_postcode, contactperson) FROM stdin;
1	00001	บริษัท A จำกัด	99/1 หมู่ 1 ต.หน้าเมือง อ.เมือง จ.ฉะเชิงเทรา	24000	อัษฏาวุธ ไพจิตร
2	00002	บริษัท บ้านดี จำกัด	125/8 หมู่ 3 ต.บางพระ อ.ศรีราชา จ.ชลบุรี	20110	สมชาย ใจดี
3	00003	ร้านสหพานิช	45 ถนนศรีโสธร ต.หน้าเมือง อ.เมือง จ.ฉะเชิงเทรา	24000	วิชัย แซ่ตั้ง
4	00004	บริษัท รุ่งเรืองวัสดุ จำกัด	88/9 หมู่ 2 ต.ท่าทราย อ.เมือง จ.นนทบุรี	11000	นพดล สุขใจ
5	00005	บริษัท ปราจีนพัฒนา จำกัด	88/12 หมู่ 5 ต.หน้าเมือง อ.เมือง จ.ปราจีนบุรี	25000	กิตติพงษ์ แก้วดี
6	00006	บริษัท กรุงเทพวัสดุ จำกัด	125/6 ถนนลาดพร้าว แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร	10900	ธนกร วัฒนชัย
7	00007	บริษัท นนท์การค้า จำกัด	45/8 ถนนรัตนาธิเบศร์ ต.บางกระสอ อ.เมือง จ.นนทบุรี	11000	ประสิทธิ์ ทองดี
8	00008	บริษัท สมุทรปราการอุตสาหกรรม จำกัด	99/9 ถนนสุขุมวิท ต.บางปู อ.เมือง จ.สมุทรปราการ	10280	อนุชา ศรีทอง
9	00009	บริษัท ปทุมธานีซัพพลาย จำกัด	77/4 หมู่ 2 ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี	12120	สมชาย สุขใจ
10	00010	บริษัท อยุธยาวัสดุ จำกัด	199/5 หมู่ 3 ต.คลองสวนพลู อ.พระนครศรีอยุธยา จ.พระนครศรีอยุธยา	13000	วิชัย ทองดี
\.


--
-- TOC entry 5045 (class 0 OID 25338)
-- Dependencies: 224
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employee (id, first_name, last_name, age, tel, type) FROM stdin;
1	ทดสอบชื่อจริง1	ทดสอบนามสกุล1	30	0111111111	เซลล์
2	ทดสอบชื่อจริง2	ทดสอบนามสกุล2	40	0222222222	ผู้จัดการเซลล์
\.


--
-- TOC entry 5043 (class 0 OID 25323)
-- Dependencies: 222
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product (id, product_code, product_name, product_type, unitprice, stock_qty, unit) FROM stdin;
1	00001	อิฐเบา	อุปกรณ์สร้างบ้าน	20.00	500	ก้อน
2	00002	ปูนซีเมนต์	อุปกรณ์สร้างบ้าน	145.00	500	ถุง
3	00003	ทรายหยาบ	อุปกรณ์สร้างบ้าน	850.00	500	คิว
4	00004	หินก่อสร้าง	อุปกรณ์สร้างบ้าน	780.00	500	คิว
5	00005	แผ่นหลังคา	อุปกรณ์สร้างบ้าน	320.00	500	แผ่น
6	00006	เหล็กเส้น 6 มม.	วัสดุก่อสร้าง	95.00	500	เส้น
7	00007	สีทาบ้าน สีขาว	สีและเคมีภัณฑ์	590.00	500	ถัง
8	00008	ท่อ PVC 1/2 นิ้ว	อุปกรณ์ประปา	65.00	500	เส้น
9	00009	ก๊อกน้ำสแตนเลส	อุปกรณ์ประปา	450.00	500	ตัว
10	00010	สวิตช์ไฟ 1 ช่อง	อุปกรณ์ไฟฟ้า	85.00	500	ตัว
\.


--
-- TOC entry 5047 (class 0 OID 25348)
-- Dependencies: 226
-- Data for Name: salesorder; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.salesorder (id, ordernumber, customer_code, product_code, salesqty, status, employee) FROM stdin;
1	1	00001	00001	100	APPROVED	1
2	2	00002	00002	30	APPROVED	1
3	3	00003	00003	8	APPROVED	1
4	4	00004	00004	20	PENDING_APPROVAL	1
5	5	00005	00005	15	APPROVED	1
6	6	00006	00006	120	PENDING_APPROVAL	1
7	7	00007	00007	10	APPROVED	1
8	8	00008	00008	100	APPROVED	1
9	9	00009	00009	25	PENDING_APPROVAL	1
10	10	00010	00010	50	APPROVED	1
12	12	00001	00002	50	APPROVED	1
13	13	00001	00003	15	PENDING_APPROVAL	1
14	14	00001	00004	20	PENDING_APPROVAL	1
15	15	00001	00005	20	APPROVED	1
11	11	00001	00001	301	APPROVED	1
\.


--
-- TOC entry 5057 (class 0 OID 0)
-- Dependencies: 219
-- Name: customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customer_id_seq', 10, true);


--
-- TOC entry 5058 (class 0 OID 0)
-- Dependencies: 223
-- Name: employee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.employee_id_seq', 15, true);


--
-- TOC entry 5059 (class 0 OID 0)
-- Dependencies: 221
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_seq', 10, true);


--
-- TOC entry 5060 (class 0 OID 0)
-- Dependencies: 225
-- Name: salesorder_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.salesorder_id_seq', 16, true);


--
-- TOC entry 4877 (class 2606 OID 25321)
-- Name: customer customer_customer_code_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_customer_code_key UNIQUE (customer_code);


--
-- TOC entry 4879 (class 2606 OID 25319)
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (id);


--
-- TOC entry 4885 (class 2606 OID 25346)
-- Name: employee employee_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (id);


--
-- TOC entry 4881 (class 2606 OID 25334)
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- TOC entry 4883 (class 2606 OID 25336)
-- Name: product product_product_code_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_product_code_key UNIQUE (product_code);


--
-- TOC entry 4887 (class 2606 OID 25361)
-- Name: salesorder salesorder_ordernumber_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salesorder
    ADD CONSTRAINT salesorder_ordernumber_key UNIQUE (ordernumber);


--
-- TOC entry 4889 (class 2606 OID 25359)
-- Name: salesorder salesorder_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salesorder
    ADD CONSTRAINT salesorder_pkey PRIMARY KEY (id);


--
-- TOC entry 4890 (class 2606 OID 25362)
-- Name: salesorder fk_salesorder_customer; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salesorder
    ADD CONSTRAINT fk_salesorder_customer FOREIGN KEY (customer_code) REFERENCES public.customer(customer_code);


--
-- TOC entry 4891 (class 2606 OID 25372)
-- Name: salesorder fk_salesorder_employee; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salesorder
    ADD CONSTRAINT fk_salesorder_employee FOREIGN KEY (employee) REFERENCES public.employee(id);


--
-- TOC entry 4892 (class 2606 OID 25367)
-- Name: salesorder fk_salesorder_product; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salesorder
    ADD CONSTRAINT fk_salesorder_product FOREIGN KEY (product_code) REFERENCES public.product(product_code);


-- Completed on 2026-10-07 21:54:38

--
-- PostgreSQL database dump complete
--

\unrestrict LzWewP2fFn1VBkKA21Z8sALovfxFNqDchh98e4eFbiewqofnNKfgcM8degngDdv

