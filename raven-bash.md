
# Raven-bash capture bash script failure log to sentry #

**Installation**
   
	 * pip install raven-bash  

**Usage**

 1.Create the file /etc/raven-bash.conf with the following content:*
 
 	 [DEFAULT]
         # replace with your DSN
         SENTRY_DSN = https://key:secret@your_sentry_domain/project_id
 2. Add source raven-bash to the beginning of your bash scripts, e.g.

         #!/bin/bash
         source raven-bash  # sentry reporting

