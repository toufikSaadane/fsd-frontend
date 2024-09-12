export interface PostRequestModel {
  postId?: number;  // Optional, as it might be null for new posts
  categoryName: string;
  postName: string;
  url?: string;  // Optional, as it doesn't have a @NotBlank annotation
  description?: string;  // Optional, as it doesn't have a @NotBlank annotation
}
