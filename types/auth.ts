type SocialCompanies = 'kakao' | 'google' | 'github';

interface SocialInfo {
	socialKey: string;
	socialType: SocialCompanies;
}

interface SignUpUserParams extends SocialInfo {
	userName: string;
}
