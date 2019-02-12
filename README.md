# Comparing Postgres vs Aurora for serverless

## Running the tests

1. Initialize schema:

```
$ psql $POSTGRES_CONNECTION_URL < schema.sql
```

2. Deploy Lambda with API Gateway in `insert-user` folder.

3. Run jmeter ( change the HTTP Url to above) :

```
$ jmeter -n -t db-test.jmx -l results.jtl

```

## Using pgBouncer

A cloudformation template for deploying pgBouncer on free EC2 (t2.micro) is given at: [pgbouncer-ec2-cloudformation.json](pgbouncer-ec2-cloudformation.json)
