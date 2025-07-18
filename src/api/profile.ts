export async function getUserProfile(userId: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/profile/${userId}`);
  
    if (!res.ok) {
      throw new Error('Failed to fetch user profile');
    }
  
    return res.json();
  }
  