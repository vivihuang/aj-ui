# 🇺🇦 Ukraine: The Chatbot UI

The chatbot UI is supposed to be imported as bundled JavaScript file, and automatically generate the DOM.

```html
<script type="text/javascript">
  var el = document.createElement('script')
  el.src = 'dist/rasa-chatbot.js'
  document.body.appendChild(el)
</script>
```

If you need to develop locally, please follow the instructions below.

## Local env setup

```bash
# One time setup
npm install

# developing, running at localhost:3000
npm start

# build, then open dist/index.html
npm run build

# lint
npm run lint
```

### Prerequisite

```
node >= 12.0.0
npm >= 6.0
```

## Example

Please refer to `./examples/index.html`.


## Jamie S3 Proxy

### Prerequisite

* Docker

## How to run locally

**Start S3 Proxy**
```bash
# build docker image
docker build -t jamie-s3-proxy .

# run the container
docker run -p 3000:3000 -t jamie-s3-proxy
# run in background
docker run -d -p 3000:3000 -t jamie-s3-proxy
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
