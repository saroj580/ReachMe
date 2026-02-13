"use server"

export async function getGithubStats() {
  const username = process.env.GITHUB_USERNAME || "saroj580"
  const token = process.env.GITHUB_TOKEN

  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  }

  if (token) {
    headers.Authorization = `token ${token}`
  }

  try {
    // Fetch user data
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers,
      next: { revalidate: 3600 }, // Cache for 1 hour
    })
    
    if (!userRes.ok) throw new Error("Failed to fetch user data")
    const userData = await userRes.json()

    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers,
      next: { revalidate: 3600 },
    })
    
    if (!reposRes.ok) throw new Error("Failed to fetch repos")
    const reposData = await reposRes.json()
    
    const totalStars = Array.isArray(reposData) 
      ? reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0)
      : 0

    return {
      followers: userData.followers || 0,
      stars: totalStars,
      repos: userData.public_repos || 0,
      username: username,
    }
  } catch (error) {
    console.error("Error fetching GitHub stats:", error)
    return null
  }
}
