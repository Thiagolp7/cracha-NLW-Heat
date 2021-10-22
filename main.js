const socialMediaLinks = {
  github: 'thiagolp7',
  youtube: 'maykbrito',
  instagram: 'thiagolp.7',
  facebook: 'ThiagoLuizPaixao',
  twitter: 'maykbrito'
}

function changeUserSocialLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
  }
}

function getUserGithubInfo() {
  const url = `https://api.github.com/users/${socialMediaLinks['github']}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url
      userName.textContent = data.name
      userGithub.textContent = data.login
      userLink.href = data.html_url
      userGithubBio.textContent = data.bio
    })
}

changeUserSocialLinks()
getUserGithubInfo()
