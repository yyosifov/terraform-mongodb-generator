# terraform-mongodb-generator
Generate a MongoDB Replica Set setup with Terraform

# Description

A library which should be able to generate a terraform code to setup, when passed a configuration of variables.

* Networking
    * VPC
    * Internet Gateway
    * Subnets
* Resources   
    * EC2 Instances
    * ELB volumes
    * Security groups
* MongoDB
    * Install software on the EC2 instances - like Docker
    * Mount the ELB volumes persistently on the EC2 machines, so that the MongoDB data directory can be mounted there, too.
    * Setup MongoDB instance on the EC2 machines (using mongodb docker containers)
    * Configure the MongoDB as a ReplicaSet
    * Configure Security Groups