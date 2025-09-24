# Continuous deployment 

Changes committed to the `main` branch will be processed by a github action and then deployed to the server. Deploy to the server uses `rsync` over `ssh`. 

In order to prepare the keys from scratch:

1. Create a key pair `ssh-keygen -m PEM -t rsa -b 4096`
2. Upload private key as `secrets.SERVER_SSH_KEY` on github (in project settings - Secrets and variables - Actions as a repository secret)
3. Copy public key to server, e.g., using `ssh-copy-id` with username and host
4. Set `vars.REMOTE_HOST` "www.mat.uniroma2.it", `vars.REMOTE_USER` "greenblatt", `vars.REMOTE_TARGET` to appropriate directory, e.g. "~/public_html/matbio24/"

These are already set up in the Environment `TV Website`, _except_ for `vars.REMOTE_TARGET` (which of course needs to be set appropriately).  If I understand all this correctly, using a different environment involves changing a matching command in `depoy.yml` here.
