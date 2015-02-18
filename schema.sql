CREATE TABLE subscribers (
    username character varying(20) NOT NULL,
    ip character varying(15),
    password character varying(80),
    role character(5) DEFAULT 'user'::bpchar NOT NULL,
    email character varying,
    company_name character varying,
    phone character varying,
    can_email boolean,
    can_sms boolean,
    email_limit integer,
    sms_limit integer,
    contact_name character varying,
    port character(6)
);
