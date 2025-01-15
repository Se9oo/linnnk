import Checkbox from '@/app/_components/input/checkbox';

export default function LinkList() {
	return (
		<section className="mt-6">
			<h3 className="text-lg">추가할 링크 리스트 선택</h3>
			<ul className="mt-4 flex flex-col justify-center gap-4">
				<li>
					<Checkbox id="link-list1" name="레시피" />
				</li>
				<li>
					<Checkbox id="link-list2" name="개발" />
				</li>
				<li>
					<Checkbox id="link-list3" name="취미" />
				</li>
			</ul>
		</section>
	);
}
