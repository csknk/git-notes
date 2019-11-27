---
title: Git's Graph Model
---
{{$page.title}}
===============

Directed Acyclic Graph
----------------------
A graph is a way to model connected things.

A Directed Acyclic Graph(DAG) is a structure of nodes connected by edges, such that connections have a direction and when moving from node to node by following the edges nodes are only encountered once.

Git uses a DAG to represent commit history.

Commits are nodes in the DAG, and they point to __parent__ commits.

Git Objects
-----------
Internally, Git uses objects to store four types of things:

* Commit objects: simple text file with data such as commit user information, commit message, reference to commit parent(s) and a reference to the root tree of the project. With this info, Git can rebuild the contents of a specific commit.
* Annotated tag: reference to a specific commit.
* Tree: an object that contains a list of filenames & directories inside a directory.
* Blob: an object that stores the content of a file that is being managed by Git.

You usually interact with commit and tag objects, with Git managing trees and blobs internally.

Objects are kept in the object store, but it is not normal to interact directly with the object store.

Git IDs
-------
A Git ID is the name of a Git object. All objects are named with a 40 character hexadecimal string. Commonly known as __Git IDs__, but also known as:

* object IDs
* SHA-1s
* Hashes
* Checksums
