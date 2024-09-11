export interface PostResponse {
  id: number;
  postName: string;
  url: string;
  description: string;
  userName: string;
  categoryName: string;
  voteCount: number;
  commentCount: number;
  duration: string;
  upVote: boolean;
  downVote: boolean;
}
