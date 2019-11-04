# Rasa Chatbot bubble

## Usage

```html
<script type="text/javascript">
  var el = document.createElement('script')
  el.src = 'dist/rasa-chatbot.js'
  document.body.appendChild(el)
</script>
```

## Example

Reference `./examples/index.html`

## Jamie S3 Proxy

### Prerequisite

* Docker
* That's all

## How to run locally

**Start S3 Proxy**
```bash
# build docker image
docker build -t jamie-s3-proxy .

# run the container
docker run -p 80:80 -t jamie-s3-proxy
```

Visit [http://localhost/index.html](http://localhost/index.html);

If **Hello Rasa** appears on your screen, that's all of the proxy.

**Other commands**

```bash
# find all running containers
docker ps -a

# stop the container, replace <container_id> with the result about
docker stop <container_id>

# clean up all containers
docker rm $(docker ps -a -q)

# clean up images
docker rmi $(docker images -q -f dangling=true)
```
